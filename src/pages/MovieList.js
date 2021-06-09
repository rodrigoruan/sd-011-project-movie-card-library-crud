import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import './MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((response) => this.setState({ movies: response }));
  }

  render() {
    const { movies } = this.state;

    if (!movies.length) {
      return (<div className="loading">Carregando...</div>);
    }

    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
