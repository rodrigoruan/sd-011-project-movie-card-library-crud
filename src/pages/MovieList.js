import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.showMovies();
  }

  async showMovies() {
    const fetch = await movieAPI.getMovies();
    this.setState({ movies: fetch, loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
