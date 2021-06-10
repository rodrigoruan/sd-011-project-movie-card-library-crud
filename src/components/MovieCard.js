import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <h3>
          {' '}
          {subtitle}
          {' '}
        </h3>
        <img src={ imagePath } alt={ title } />
        <p>
          {' '}
          {storyline}
          {' '}
        </p>
        <span>
          <Link to={ { pathname: `movies/${id}` } }>VER DETALHES</Link>
        </span>
      </div>
    );
  }
}

/* Retirei do codigo do Hugo Sommers daqui: https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/45/files */
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number]).isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
