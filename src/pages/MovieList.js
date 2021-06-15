import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const moviesApi = await getMovies();
    this.setMovie(moviesApi);
  }

  setMovie(movies) {
    this.setState((state) => ({ movies: [...state.movies, ...movies] }));
  }

  render() {
    const { movies } = this.state;
    const movieList = movies.map((mov) => <MovieCard key={ mov.title } movie={ mov } />);

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {(movies.length === 0) ? <p>Carregando...</p> : movieList}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
