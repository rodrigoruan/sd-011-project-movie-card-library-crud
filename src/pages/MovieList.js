import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      promise: false,
    };
  }

  async componentDidMount() {
    const promise = await movieAPI.getMovies()
      .then(this.setState({ promise: true }));
  }

  render() {
    const { movies, promise } = this.state;

    // Render Loading here if the request is still happening
    if (!promise) {<Loading />}

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
