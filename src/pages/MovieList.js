import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const moviesL = await movieAPI.getMovies();
    moviesL.map((movie) => {
      const { movies } = this.state;
      return this.setState({
        movies: [...movies, movie],
      });
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (movies.length === 0) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        <button type="button">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </button>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
