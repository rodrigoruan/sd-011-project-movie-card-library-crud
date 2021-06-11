import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card">
        <img src={ movie.imagePath } alt="Foto filme" />
        <p>{movie.title}</p>
        <p>{movie.storyline}</p>
        <span>
          <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
        </span>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};
