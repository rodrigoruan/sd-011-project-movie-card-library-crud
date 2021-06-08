import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, id, storyline, rating, imagePath } = movie;

    return (
      <li data-testid="movie-card">
        <img src={ imagePath } alt={ `Cover for ${title}` } />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <small>{rating}</small>
        <p>{storyline}</p>
        <p><Link to={ `/movies/${id}` }>VER DETALHES</Link></p>
      </li>
    );
  }
}

export default MovieCard;
