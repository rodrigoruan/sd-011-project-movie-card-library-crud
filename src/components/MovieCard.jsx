import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieDetails from '../pages/MovieDetails';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <MovieDetails MovieInfos={ movie } />
        <Link to="/movies/:id">VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.array,
}.isRequired;
