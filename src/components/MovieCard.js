import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {id, title, subtitle, storyline, imagePath, rating} = movie;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <img src={ imagePath } />
        <h3>{ subtitle }</h3>
        <p>{ storyline } </p>
        <span>{ rating }</span>
        <Link to={`movies/${id}`}>
        VER DETALHES
        </Link>
      </div>
    );
  }
}

export default MovieCard;
