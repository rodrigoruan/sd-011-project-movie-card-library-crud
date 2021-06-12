import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;

    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={ imagePath } />
        <div>
          <h4>{title}</h4>
          <p>{storyline}</p>
        </div>
        <div>
          <Link to={ `/movies/${id}` }>VER</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
