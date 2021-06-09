import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
// import * as movieAPI from '../services/movieAPI';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      verified: false,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    getMovies()
      .then((recevedContent) => recevedContent
        .forEach((value, index, array) => {
          this.setState({
            movies: [...array],
            verified: true,
          });
          return value;
        }));
  }

  render() {
    // Render Loading here if the request is still happening
    const { movies, verified } = this.state;
    return (
      <div>
        { verified ? this.fetchMovies() : <Loading /> }
        <div data-testid="movie-list">
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      </div>
    );
  }
}

export default MovieList;
