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

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const fetchResult = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: fetchResult,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
