import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
// import Loading from '../components/Loading';
// import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.listMovies = this.listMovies.bind(this);
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
