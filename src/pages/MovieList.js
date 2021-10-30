import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.fetchFakeApi = this.fetchFakeApi.bind(this);
  }

  //  Chamada a função para setar os movies no state, quando o componente for montado
  componentDidMount() {
    this.fetchFakeApi();
  }

  //  Função para fazer um requisição na "API" que retorna os filmes
  async fetchFakeApi() {
    const response = await movieAPI.getMovies();
    this.setState({ movies: response, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    //  Caso o loading seja true retorna o componente Loading
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))}
      </div>
    );
  }
}

export default MovieList;
