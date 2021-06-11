import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import '../styles/MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };

  }

  async componentDidMount() {
    await this.getMovies();
  }

  async getMovies() {
    const movies = await movieAPI.getMovies();

    this.setState({
      movies,
      isLoading: false,
    });
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <div className="MovieList" data-testid="movie-list">
        <Loading isLoading={ isLoading } />
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
