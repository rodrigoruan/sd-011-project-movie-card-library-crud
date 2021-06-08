import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: '',
    };
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    movieAPI.getMovies().then((movies) => this.setState({
      movies,
    }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div className="movie-list">
        {movies ? (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default MovieList;
