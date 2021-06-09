import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card">
        Movie Card
        <nav>
          <h2>{title}</h2>
          <p>{storyline}</p>
          <Link to={ `movies/${id}` }>VER DETALHES</Link>
        </nav>
      </div>
    );
  }
}

export default MovieCard;
