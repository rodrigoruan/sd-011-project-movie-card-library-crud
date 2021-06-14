import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: match.params.id,
      status: 'loading',
      movie: {
        title: [],
        subtitle: [],
        storyline: [],
        rating: '0',
      },
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnMovie = this.returnMovie.bind(this);
  }

  componentDidMount() {
    const { movieId } = this.state;
    this.returnMovie(movieId);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      movie: updatedMovie,
      shouldRedirect: true,
    });
  }

  async returnMovie(movieId) {
    const selectedMovie = await movieAPI.getMovie(movieId);
    this.setState({
      movie: selectedMovie,
      status: 'success',
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

EditMovie.prototypes = {
  match: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default EditMovie;
