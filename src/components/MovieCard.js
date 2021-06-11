import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const path = `movies/${movie.id}`;
    return (
      <div data-testid="movie-card">
        <p>{movie.title}</p>
        <p>{movie.storyline}</p>

        <Link to={ path }> VER DETALHES </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact().isRequired,
};

export default MovieCard;
