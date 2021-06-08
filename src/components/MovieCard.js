import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      id, title, subtitle, genre, imagePath, rating, storyline,
    } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <h1>{ subtitle }</h1>
        <img src={ imagePath } alt="poke" />
        <h1>{ genre }</h1>
        <h1>{ rating }</h1>
        <h1>{ storyline }</h1>
        <Link to={ `/movies/${id}` } params={ id }>VER DETALHES</Link>
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
