import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

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
    const theMovies = await movieAPI.getMovies();
    this.updateMovie(theMovies);
  }

  updateMovie(param) {
    this.setState(() => ({
      movies: param,
      load: false,
    }));
  }

  render() {
    const { load, movies } = this.state;

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
