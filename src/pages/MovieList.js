import React, { Component } from 'react';
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

    this.showMovieList = this.showMovieList.bind(this);
  }

  componentDidMount() {
    this.showMovieList();
  }

  async showMovieList() {
    this.setState(
      { loading: true },
      async () => {
        const movieList = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: movieList,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
