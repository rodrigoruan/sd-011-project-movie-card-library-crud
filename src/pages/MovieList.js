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
    this.fetchApi();
  }

  fetchApi() {
    this.setState({ loading: true }, () => {
      movieAPI.getMovies()
        .then((response) => {
          this.setState({
            loading: false,
            movies: response,
          });
        });
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
