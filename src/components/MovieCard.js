import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath, id } } = this.props;

    return (
      <div data-testid="movie-card" className="mapped-movie">
        <img className="img-movie" src={ imagePath } alt="imagens dos filmes" />
        <h3>{title}</h3>
        <p>{storyline}</p>
        <p><Link to={ `movies/${id}` }>VER DETALHES</Link></p>
      </div>
    );
  }
}

export default MovieCard;
