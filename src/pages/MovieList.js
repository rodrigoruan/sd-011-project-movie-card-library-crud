import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      movies: [],
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({
      loading: true,
    },
    async () => {
      const data = await movieAPI.getMovies();
      this.setState({
        loading: false,
        movies: data,
      });
    });
  }

  render() {
    const { loading, movies } = this.state;
    const loadingElement = <span>Carregando...</span>;

    return (
      <div data-testid="movie-list">
        {loading
          ? loadingElement
          : (movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
