import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const movieList = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : movieList}
      </div>
    );
  }
}

export default MovieList;
