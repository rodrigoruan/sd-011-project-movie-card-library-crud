import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: '',
    };
  }

  componentDidMount() {
    getMovies().then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        <h1>Movie Card Library CRUD</h1>
        {movies ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading />}
      </div>
    );
  }
}

export default MovieList;
