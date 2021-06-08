import React from 'react';
import MovieDetails from '../pages/MovieDetails';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        Movie Card
        <MovieDetails />
      </div>
    );
  }
}

export default MovieCard;
