import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.setMovies = this.setMovies.bind(this);

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const moviesList = await movieAPI.getMovies();
    this.setMovies(moviesList);
  }

  setMovies(movies) {
    this.setState({
      movies,
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.length !== 0 ? movies.map((movie) => (
          <MovieCard
            key={ movie.title }
            movie={ movie }
          />))
          : <Loading />}
      </div>
    );
  }
}

export default MovieList;
