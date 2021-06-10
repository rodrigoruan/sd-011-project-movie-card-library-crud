import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      id,
      title,
      storyline,
      imagePath,
    } = movie;

    return (
      <div
        data-testid="movie-card"
      >
        <img
          alt="Movie Cover"
          src={ imagePath }
        />
        <div>
          <h4
            data-testid="movie-card-title"
          >
            {title}
          </h4>
          <p>
            {storyline}
          </p>
          <Link to={ `/movies/${id}` }>
            VER DETALHES
          </Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
