import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
    this.fecthApi = this.fecthApi.bind(this)
  }

  async fecthApi() {
    this.setState(
      { loading: true },
      async () => {
      const requestReturn = await movieAPI.getMovies()
      this.setState({
          loading: false,
          movies: [...requestReturn]
        });
    });

  }

  componentDidMount() {
    this.fecthApi();    
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
