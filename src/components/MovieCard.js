import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        Movie Card
        <nav>
          <Link to="/movies/:id">VER DETALHES</Link>
        </nav>
      </div>
    );
  }
}

export default MovieCard;
