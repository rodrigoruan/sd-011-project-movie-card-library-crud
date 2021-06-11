import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.fetchGetMovies = this.fetchGetMovies.bind(this);
  }

  componentDidMount() {
    this.fetchGetMovies();
  }

  async fetchGetMovies() {
    const { getMovies } = movieAPI;
    const response = await getMovies();
    this.setState({ movies: response, loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        {
          loading ? <Loading />
            : movies.map((movie) => (
              <MovieCard
                key={ movie.title }
                movie={ movie }
              />
            ))
        }
        <button type="button">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </button>
      </div>
    );
  }
}

export default MovieList;
