import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    this.state = {
      movieId: match.params.id,
      shouldRedirect: false,
      status: 'loading',
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { movieId } = this.state;
    movieAPI.getMovie(movieId)
      .then((movie) => this.setState({ status: 'ok', movie }));
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(this.setState({ shouldRedirect: true }));
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
      <div className="container" data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
