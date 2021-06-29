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
      charged: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { getMovies } = movieAPI;
    const search = await getMovies();
    this.setState({ movies: search, charged: false });
  }

  render() {
    const { movies, charged } = this.state;
    return (
      <div data-testid="movie-list">
        { charged ? <Loading /> : movies.map((movie) => (<MovieCard
          key={ movie.title }
          movie={ movie }
        />))}
        <button type="button">
          <Link to="/movies/new"> ADICIONAR CARTÃO </Link>
        </button>
      </div>
    );
  }
}

export default MovieList;
