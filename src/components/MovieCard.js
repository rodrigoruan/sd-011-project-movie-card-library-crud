import React from 'react';
import MovieDetails from '../pages/MovieDetails';
import { getMovies } from '../services/movieAPI';

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: [],
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  fetchMovies() {
    getMovies()
      .then((recevedContent) => recevedContent
        .forEach((value) => {
          this.setState({
            movie: value.title,
          });
        }));
  }

  render() {
    const { movie } = this.state;
    return (
      <div data-testid="movie-card">
        <MovieDetails key={ movie } />
        <p>
          working
        </p>
      </div>
    );
  }
}

export default MovieCard;
