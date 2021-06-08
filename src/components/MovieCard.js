import React from "react";
import { Link } from "react-router-dom";
class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <h3> {subtitle} </h3>
        <img src={imagePath} alt={title} />
        <p> {storyline} </p>
        <span>
          <Link to={`movies/${id}`}>VER DETALHES</Link>
        </span>
      </div>
    );
  }
}

export default MovieCard;
