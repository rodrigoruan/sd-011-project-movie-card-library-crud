import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => this.setState(() => (
      { movie, status: 'ready' }
    )));
  }

  handleSubmit(updatedMovie) {
    const { history } = this.props;
    movieAPI.updateMovie(updatedMovie).then(() => history.push('/'));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    return (
      status === 'loading' ? <Loading />
        : (
          <div data-testid="edit-movie">
            <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
          </div>
        )
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.func.isRequired,
};

export default EditMovie;
