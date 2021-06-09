import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const data = await movieAPI.getMovies();
    this.setState({movies: data})
  }

  render() {
    const { movies } = this.state;
    let loading = movies.length === 0;

    return (
      <div data-testid="movie-list">
        <h1>Estou no Movie List</h1>
        { loading ? <Loading /> : null }
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
