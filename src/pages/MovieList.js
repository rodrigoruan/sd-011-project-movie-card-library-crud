import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      charged: true,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchGetMovies() {
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
      </div>
    );
  }
}

export default MovieList;
