import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';

import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getComponentApi();
  }

  async getComponentApi() {
    const requested = await movieAPI.getMovies();
    console.log(requested);
    this.setState({
      movies: requested,
      loading: false, // Tales e Rodrigo me ajudaram nessa função
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">

        {loading
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
