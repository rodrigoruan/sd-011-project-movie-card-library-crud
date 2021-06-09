import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  async loadMovies() {
    this.setState({ movies: await movieAPI.getMovies() });
  }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {
          movies.length !== 0
            ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
            : <Loading />
        }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
