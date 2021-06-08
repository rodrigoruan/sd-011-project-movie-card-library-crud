import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    const details = `movies/${id}`;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
        <div className="movie-card-body">
          <p className="movie-card-storyline">{storyline}</p>
          <Link to={ details }> VER DETALHES </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
