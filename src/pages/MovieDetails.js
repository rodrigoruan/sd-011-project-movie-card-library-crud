import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor({ match }) {
    super({ match });

    this.state = {
      movieId: match.params.id,
      movie: [],
    };

    this.fetchMovieInformations = this.fetchMovieInformations.bind(this);
  }

  componentDidMount() {
    const { movieId } = this.state;
    this.fetchMovieInformations(movieId);
  }

  async fetchMovieInformations(movieId) {
    const data = await movieAPI.getMovie(movieId);
    this.setState({ movie: data });
  }

  async removeMovie(movieId) {
    await movieAPI.deleteMovie(movieId);
  }

  render() {
    const { movie, movieId } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (movie.length === 0) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}`}</p>
        <p>{ `Storyline: ${storyline}`}</p>
        <p>{ `Genre: ${genre}`}</p>
        <p>{ `Rating: ${rating}`}</p>
        <button type="button">
          <Link to={ `/movies/${movieId}/edit` } movie={ movie }>EDITAR</Link>
        </button>
        <button type="button">
          <Link to="/">VOLTAR</Link>
        </button>
        <button type="button">
          <Link to="/" onClick={ this.removeMovie }>DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  // movie: PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   subtitle: PropTypes.string.isRequired,
  //   storyline: PropTypes.string.isRequired,
  //   genre: PropTypes.string.isRequired,
  //   rating: PropTypes.number.isRequired,
  // }).isRequired,
};

export default MovieDetails;
