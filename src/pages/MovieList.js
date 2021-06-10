import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      status: true,
    };
  }

  componentDidMount() {
  movieAPI.getMovies()
      .then((results) => this.setState({ movies: results, status: false }));
  }

  render() {
    const { movies, status } = this.state;
    if (status) {
      return <Loading />
    }
    return (
      <div>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
