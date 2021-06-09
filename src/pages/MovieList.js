import React from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.fetchFakeApi = this.fetchFakeApi.bind(this);
  }

  // Chama a função para setar os filmes no state, sempre que o componente for chamado.
  componentDidMount() {
    this.fetchFakeApi();
  }

  // Faz requisição na API que retorna os filmes
  async fetchFakeApi() {
    const response = await movieAPI.getMovies();
    this.setState({ movies: response, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    // Se o loading for verdadeiro vai retornar o componente loading.
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
