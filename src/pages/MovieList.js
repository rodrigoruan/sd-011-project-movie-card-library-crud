import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    // Foi criado o estado com: loading Boleano e movies que seria o array que receberia a lista de objeto ocntendo as informações dos filmes
    this.state = {
      movies: [],
      loading: true,
    };
    // bind da função para ultilizaro o this dento do render caso necessario:
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  // O component did mount é usado aqui pois queremos que os filmes sejam buscados apos o carregamento inicial da pagina
  componentDidMount() {
    this.fetchMovies();
  }

  // função fetchMovies ->
  // função usando async / await pois precisamos esperar a o retorno de getMovies
  // enquanto espera o retorno coloca o loading no state para false apos isso coloca a lista de filmes no array state movies
  async fetchMovies() {
    const fetchResult = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: fetchResult,
    });
  }

  render() {
    // busco os estados movies e loading
    // faço uma consdicional caso loading seja true renderiza o componente <Loading />
    const { movies, loading } = this.state;
    if (loading) {
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
