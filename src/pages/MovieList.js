import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      charged: false,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchGetMovies() {
    this.setState({ charged: true },
      async () => {
        const movieList = await movieAPI.getMovies();
        this.setState({ movies: movieList, charged: false });
      });
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
