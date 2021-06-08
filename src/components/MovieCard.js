import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <span>{ title }</span>
        <img src={ imagePath } alt={`movie-${ title }`}/>
        <p>{ storyline }</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
