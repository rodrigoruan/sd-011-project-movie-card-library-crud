import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

export default class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      load: true,
    };
  }

  getMovies = async () => {
    const moviesList = await movieAPI.getMovies();
    this.setState({
      movies: moviesList,
      load: false,
    });
  }

  componentDidMount = () => {
    this.getMovies();
  }

  render() {
    const { movies, load } = this.state;
    return (
      <div data-testid="movie-list">
        { load
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}
