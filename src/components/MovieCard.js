import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      id, title, subtitle, genre, imagePath, rating, storyline,
    } = movie;
    return (
      <div className="container">
        <div className="card" data-testid="movie-card">
          <h1>{ title }</h1>
          <h5>{ subtitle }</h5>
          <img src={ imagePath } alt="poke" />
          <h3>{ genre }</h3>
          <p>{ rating }</p>
          <p>{ storyline }</p>
          <Link to={ `/movies/${id}` } params={ id }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
