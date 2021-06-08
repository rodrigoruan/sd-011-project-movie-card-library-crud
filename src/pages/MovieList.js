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
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  fetchMovies() {
    getMovies()
      .then((recevedContent) => recevedContent
        .forEach((value, index, array) => {
          this.setState({
            movies: [...array],
          });
          return value;
        }));
  }

  render() {
    // Render Loading here if the request is still happening
    const { movies } = this.state;
    return (
      <div>
        <button type="button" onClick={ this.fetchMovies }>Clica em mim =D</button>
        <Loading />
        <div data-testid="movie-list">
          <MovieCard movieInfos={ this.fetchMovies } />
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      </div>
    );
  }
}

export default MovieList;
