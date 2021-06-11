import React, { Component } from 'react';
import { MovieCard, Loading } from '../components'; // desestrutura as pastas para incluir apenas em ('../components'). Obrigada, Gisele Costa!
import * as movieAPI from '../services/movieAPI';

// Passo 2 - Foi utilizada uma função async (promise) para fazer a requisição da api (await movieAPI.getMovies()) e alterar o state (this.setState)
class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true, // Inclui o loading no state, para podermos utilizá-lo dinamicamente posteriormente.
    };

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI(); // Ao incluir a requisição aqui, ela é chamada no momento em que o componente MovieList é montado no DOM (componentDidMount).
  }

  async fetchAPI() {
    const requestMovies = await movieAPI.getMovies(); // guarda a requisição em uma constante e a chama posteriormente
    this.setState({ // agenda uma atualização para o objeto state de um componente
      movies: requestMovies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state; // inclui o state no render para podermos utilizá-lo aqui (acessa o state)

    if (loading) { // se o loading é verdadeiro, retorna o componente Loading (Carregando... / requisição em curso)
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div> // após o retorno da requisição renderiza o MovieCard
    );
  }
}

export default MovieList;
