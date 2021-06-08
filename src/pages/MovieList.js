import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.loadMovies = this.loadMovies.bind(this);
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies() {
    movieAPI.getMovies().then((result) => this.setState({ movies: result }));
  }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {movies.length !== 0
          ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading /> }
      </div>
    );
  }
}

export default MovieList;
