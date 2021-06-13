import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      request: true,
    };
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.setApiOnState(movies);
  }

  setApiOnState(arrayMovies) {
    this.setState({
      movies: arrayMovies,
      request: false,
    });
  }

  render() {
    const { movies, request } = this.state;
    return request ? <Loading /> : (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
