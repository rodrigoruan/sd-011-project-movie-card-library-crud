import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieCover from './MovieCover';

class MovieDetails extends Component {
  constructor({ match }) {
    super({ match });

    this.state = {
      movie: [],
      id: match.params.id,
      isLoad: false,
    };
  }

  componentDidMount() {
    this.isreturn();
  }

  async isreturn() {
    const { id } = this.state;
    const getMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: getMovie,
      isLoad: true,
    });
  }

  render() {
    const { id, isLoad, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (!isLoad) return <Loading />;
    return (
      <div data-testid="movie-details">
        <MovieCover
          title={ title }
          storyline={ storyline }
          imagePath={ imagePath }
          genre={ genre }
          rating={ rating }
          subtitle={ subtitle }
          id={ id }
        />
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
