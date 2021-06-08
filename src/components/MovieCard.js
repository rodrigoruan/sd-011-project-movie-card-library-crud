import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;

    return (
      <div data-testid="movie-card" className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <p className="movie-card-storyline">{ storyline }</p>
          <span className="movie-card-link">
            <Link to={ `/movies/${id}` } params={ id }>VER DETALHES</Link>
          </span>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
