import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor({ match }) {
    super({ match });

    this.state = {
      movieId: match.params.id,
      movie: {
        title: [],
        subtitle: [],
        storyonline: [],
        rating: '0',
      },
      status: 'loading',
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovieApi = this.fetchMovieApi.bind(this);
  }

  componentDidMount() {
    const { movieId } = this.state;
    this.fetchMovieApi(movieId);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState(({
      movie: updatedMovie,
      shouldRedirect: true,
    }));
  }

  async fetchMovieApi(movieId) {
    const data = await movieAPI.getMovie(movieId);
    this.setState({ movie: data, status: 'success' });
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

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
