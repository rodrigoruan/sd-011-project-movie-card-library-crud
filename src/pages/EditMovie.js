import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { id } = match.params;
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: '',
      id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getMovieForm();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async getMovieForm() {
    const { id } = this.state;
    const requestedMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: requestedMovie,
      status: 'true',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number,
    }),
  }).isRequired,
};
