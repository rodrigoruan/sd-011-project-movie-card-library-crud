import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

/*
Componente MovieList.js
-> Aqui começa o Requisito 2 - O MovieLibrary tem como finalidade renderizar a lista de filmes do projeto
-> Aqui é pedido para que enquanto estivermos esperando a requisição da lista de filmes seja escrito na tela Carregando... alem de verificar se é exibido um MovieCard para cada filme na lista de requisição da API
*/
class MovieList extends Component {
  constructor(props) {
    super(props);
    // Foi criado o estado com: loading Boleano e movies que é o array  de objetos que  contendo as informações dos filmes
    this.state = {
      movies: [],
      loading: true,
    };
    // bind da função para ultilizaro o this dentro do render caso necessario:
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  // O component did mount é usado aqui pois queremos que os filmes sejam buscados apos o carregamento inicial da pagina
  componentDidMount() {
    this.fetchMovies();
  }

  // função fetchMovies ->
  // função usando async / await pois precisamos esperar a o retorno de getMovies (API)
  // enquanto espera o retorno coloca o loading no state para false fasendo com que ele apareça na tela apos receber o retorno da API coloca a lista de filmes no array state movies
  async fetchMovies() {
    const fetchResult = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: fetchResult,
    });
  }

  render() {
    // busco os estados movies e loading
    // faço uma condicional caso loading seja true renderiza o componente <Loading />
    const { movies, loading } = this.state;
    if (loading === true) {
      return <Loading />;
    }
    // faz um map em movies e exibe o array de obejetos - Movies
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
