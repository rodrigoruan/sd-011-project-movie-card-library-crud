import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      // a props loading espera a resposta da API enquanto carrega
      loading: true,
      movies: [],
    };
  }

  async componentDidMount() {
    const response = await movieAPI.getMovies();
    this.findMovies(response);
  }

  //Recomendado fazer funções fora do ciclo de vida
  findMovies(arrayFromAPI) {
    this.setState({
      movies: arrayFromAPI,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        { loading
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

export default MovieList;
