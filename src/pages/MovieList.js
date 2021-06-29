import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      movies: [],
    };

    this.requestMovies = this.requestMovies.bind(this);
  }

  componentDidMount() {
    this.requestMovies();
  }

  requestMovies() {
    const { getMovies } = movieAPI;
    this.setState({
      loading: true,
    }, () => {
      getMovies()
        .then((moviesData) => {
          this.setState({
            movies: moviesData,
            loading: false,
          });
        });
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
