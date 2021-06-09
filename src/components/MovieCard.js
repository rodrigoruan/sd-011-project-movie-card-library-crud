import React from 'react';
import { shape, string, number } from 'prop-types';

import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath } = movie;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="movie" />
        <h1>{ title }</h1>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: shape({
    title: string,
    storyline: string,
    id: number,
  }).isRequired,
};

export default MovieCard;
