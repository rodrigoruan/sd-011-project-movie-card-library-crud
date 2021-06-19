import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const response = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: response,
        });
      },
    );
  }

  cards() {
    const { movies } = this.state;

    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> : this.cards()}
      </div>
    );
  }
}

export default MovieList;
