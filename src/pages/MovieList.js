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
      loading: false,
    };
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { getMovies } = movieAPI;
    this.setState({ loading: true },
      async () => {
        const requestResponse = await getMovies();
        this.setState({
          loading: false,
          movies: requestResponse,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        { loading === true
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
