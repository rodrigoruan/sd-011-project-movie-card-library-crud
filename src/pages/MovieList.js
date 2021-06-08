import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      load: true,
    };
    this.updateMovie = this.updateMovie.bind(this);
  }

  async componentDidMount() {
    await movieAPI.getMovies();
    this.updateMovie();
  }

  updateMovie() {
    this.setState((state) => ({
      movies: [...state.movies, movies],
      load: false,
    }));
  }

  render() {
    const { load } = this.state;

    // Render Loading here if the request is still happening
    const loading = 'Carregando...';
    const movs = movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);

    return (
      <div data-testid="movie-list">
        {load ? loading : movs}
      </div>
    );
  }
}

export default MovieList;
