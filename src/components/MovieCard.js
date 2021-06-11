import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, imagePath, id } } = this.props;
    return (
      <div data-testid="movie-card" className="card-film">
        <h1>{ title }</h1>
        <p>{ subtitle }</p>
        <img className="image" src={ imagePath } alt={ title } />
        <Link className="link" to={ `/movies/${id}` } params={ id }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    storyline: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
