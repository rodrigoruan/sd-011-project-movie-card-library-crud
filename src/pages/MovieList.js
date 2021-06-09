import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  getMovieList() {
    const { movies, loading } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))}
      </div>
    );
  }

  async fetchMovies() {
    const requestMovies = await movieAPI.getMovies();
    this.setState({
      movies: requestMovies,
      loading: false,
    });
  }

  render() {
    return this.getMovieList();
  }
}

export default MovieList;
