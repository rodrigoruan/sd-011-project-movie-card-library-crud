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
      request: true,
    };
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies(); // recebe array de filmes
    this.setApiOnState(movies);
  }

  setApiOnState(arrMovies) {
    this.setState({
      movies: arrMovies,
      request: false,
    });
  }

  render() {
    const { movies, request } = this.state;
    return request ? <Loading /> : (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
