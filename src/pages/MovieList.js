import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: '',
    };

    this.getMovies = this.getMovies.bind(this);
  }

  // Aqui, o componentDidMount vai ler o código antes do retorno da API
  componentDidMount() {
    this.getMovies();
  }

  // Usamos async para criar uma função assíncrona e retorna uma promisse
  async getMovies() {
    const requestReturn = await movieAPI.getMovies();
    this.setState({
      movies: requestReturn,
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading />}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
