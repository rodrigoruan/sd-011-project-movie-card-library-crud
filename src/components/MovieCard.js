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
          <Link to={ `movies/${id}` }>VER DETALHES</Link>
        </span>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired.isRequired,
};

export default MovieCard;
