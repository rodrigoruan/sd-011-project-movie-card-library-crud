import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: '',
    };
    this.captureMovies = this.captureMovies.bind(this);
  }

  componentDidMount() {
    this.captureMovies();
  }

  async captureMovies() {
    const moviesImported = await movieAPI.getMovies();
    this.setState({
      movies: moviesImported,
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies
          ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading />}
      </div>
    );
  }
}

export default MovieList;
