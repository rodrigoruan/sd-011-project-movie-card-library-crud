import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor() {
    super();
    this.getId = this.getId.bind(this);
  }

  getId() {
    const { movie } = this.props;
    const pathId = `/movies/${movie.id}`;

    return pathId;
  }

  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ movie.imagePath } alt={ movie.title } />
        <h2>{ movie.title }</h2>
        <h3>{ movie.subtitle }</h3>
        <p>{ movie.storyline }</p>

        <Link to={ this.getId }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
