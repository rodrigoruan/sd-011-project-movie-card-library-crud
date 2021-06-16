import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      verified: false,
    };
  }

  componentDidMount() {
    this.fetchGetMovies();
  }

  fetchGetMovies() {
    getMovies()
      .then((movieList) => {
        this.setState({
          movies: movieList,
          verified: true,
        });
      });
  }

  render() {
    // Render Loading here if the request is still happening
    const { movies, verified } = this.state;
    return (
      <ul data-testid="movie-list">
        { verified ? this.fetchGetMovies() : <Loading /> }
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </ul>
    );
  }
}

export default MovieList;
