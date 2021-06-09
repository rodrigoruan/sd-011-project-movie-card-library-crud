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

  async fetchMovies() {
    const requestMovies = await movieAPI.getMovies()
    this.setState({
      movies: requestMovies,
      loading: false,
    })
  }

  componentDidMount() {
    this.fetchMovies()
  }

  render() {
    const { movies, loading } = this.state;

    const request = loading ? <Loading /> : <div data-testid="movie-list">
    {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
  </div>
    // Render Loading here if the request is still happening
    return (
      { request }
    );
  }
}

export default MovieList;
