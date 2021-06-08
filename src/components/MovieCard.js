import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, subtitle, storyline, imagePath }} = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <h2>{ subtitle }</h2>
        <p>{ storyline }</p>
        <img src={ imagePath } />
      
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.protoTypes = {
  movie: PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  }).isRequired,
}

export default MovieCard;
