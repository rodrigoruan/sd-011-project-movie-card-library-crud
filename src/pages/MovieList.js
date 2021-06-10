import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };
    this.fechMovies = this.fechMovies.bind(this);
  }

  componentDidMount() {
    this.fechMovies();
  }

  //  função para popular o estado e deve ser chamada quando o componente é montado
  async fechMovies() {
    const response = await movieAPI.getMovies();
    this.setState({
      movies: response,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        { loading === true ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <li><Link to="/movies/new">ADICIONAR CARTÃO</Link></li>
      </div>
    );
  }
}

export default MovieList;
