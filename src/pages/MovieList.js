import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      movies: [],
    };

    this.fetchedMovies = this.fetchedMovies.bind(this);
    this.fetchIsDone = this.fetchIsDone.bind(this);
  }

  componentDidMount() {
    this.fetchedMovies();
  }

  fetchIsDone() {
    this.setState((state) => ({ ...state, isLoading: false }));
  }

  async fetchedMovies() {
    const fetchedMovies = await movieAPI.getMovies();
    this.setState({
      movies: fetchedMovies,
    });
    this.fetchIsDone();
  }

  render() {
    const { movies, isLoading } = this.state;
    const movieListELement = (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );

    return isLoading ? <Loading /> : movieListELement;
  }
}

export default MovieList;
