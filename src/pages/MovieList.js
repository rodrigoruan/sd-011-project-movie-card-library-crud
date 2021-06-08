import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.renderAllMovies = this.renderAllMovies.bind(this);

    this.state = {
      movies: [],
    };
  }

  

  async renderAllMovies() {
    const apiMovies = await movieAPI.getMovies();

    this.setState({
      movies: apiMovies,
    })

  }

  componentDidMount() {
    this.renderAllMovies();
  }


  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
