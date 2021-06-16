import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoad: false,
    };
  }

  componentDidMount() {
    this.isreturn();
  }

  async isreturn() {
    const getMovies = await movieAPI.getMovies();
    this.setState({
      movies: getMovies,
      isLoad: true,
    });
  }

  render() {
    const { movies, isLoad } = this.state;
    return (
      <div data-testid="movie-list">
        {!isLoad ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
