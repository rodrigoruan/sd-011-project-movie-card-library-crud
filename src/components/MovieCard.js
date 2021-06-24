import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, genre, storyline, imagePath, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
        <h3>{ genre }</h3>
        <p>{ storyline }</p>
        <img src={ imagePath } alt={ title } />
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
