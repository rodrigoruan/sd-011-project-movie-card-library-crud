import React, { Component } from 'react';
import Link from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getMovieAsync();
  }

  //   ----------- Adicionar tratamento de erro aqui ----------------
  async getMovieAsync() {
    const moviesApi = await movieAPI.getMovies();
    this.setState(() => ({
      movies: moviesApi,
      isLoading: false,
    }));
  }

  render() {
    const { movies, isLoading } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {isLoading ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        )}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
