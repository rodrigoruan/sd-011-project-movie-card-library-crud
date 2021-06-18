import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      status: 'loading',
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState(() => (
      { movies, status: 'ready' }
    )));
  }

  render() {
    const { movies, status } = this.state;
    return (
      status === 'loading' ? <Loading />
        : (
          <div data-testid="movie-list">
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          </div>
        )
    );
  }
}

export default MovieList;
