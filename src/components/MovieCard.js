import React from "react";
import { Link } from "react-router-dom"

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={movie.imagePath} alt={`Capa do filme ${movie.title}`} />
        <h3>{movie.title}</h3>
        <h4>{movie.storyline}</h4>
        <Link to={`movies/${movie.id}`} >VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
