import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, storyline, id } = this.props.movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <div className="movie-card-cover">
          <img src={ imagePath } alt={ title } />
          <h3>{ title }</h3>
        </div>
        <div className="movie-card-description">
          <p>{storyline}</p>
        </div>
        <div className="movie-card-footer">
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
