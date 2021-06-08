import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: '',
      // loading: true,
    };
    this.captureMovies = this.captureMovies.bind(this);
  }

  componentDidMount() {
    this.captureMovies();
  }

  async captureMovies() {
    const moviesImported = await movieAPI.getMovies();
    this.setState({
      movies: moviesImported,
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies // Se movies for verdadeiro imprima o map, senao imprima o "Carregando..."
          ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading />}
      </div>
    );
  }
}

export default MovieList;
