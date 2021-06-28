import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
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
    this.requireMovieList = this.requireMovieList.bind(this);
  }

  componentDidMount() {
    this.requireMovieList();
  }

  // REQ.02 Para buscar a lista, você deve utilizar a função getMovies importada do módulo movieAPI em MovieList. Essa função retorna uma promise. A requisição deve ser feita no momento em que o MovieList for montado no DOM.
  async requireMovieList() {
    const returnedMovies = await movieAPI.getMovies();
    this.setState({ movies: returnedMovies, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>);
  }
}

export default MovieList;
