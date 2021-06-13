import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, imagePath, storyline, title } } = this.props;
    return (
      <div data-testid="movie-card">
        <div>
          <img src={ imagePath } alt={ title } />
          <span>{ title }</span>
        </div>
        <div>
          <p>{ storyline }</p>
        </div>
        <Link to={ `/movies/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
