import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <h3>{ title }</h3>
        <p>{ storyline }</p>
        <img alt="Movie Cover" src={ imagePath } />
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    id: propTypes.number,
  }).isRequired,
};

export default MovieCard;

// Source: consulta ao repositório https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/161/
