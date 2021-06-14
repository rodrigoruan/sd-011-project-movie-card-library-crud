import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loadingMovie: true,
    };
  }

  componentDidMount() {
    this.requestReturn();
  }

  requestReturn = async () => {
    this.setState({
      movies: await movieAPI.getMovies(),
      loadingMovie: false,
    });
  }

  render() {
    const { movies, loadingMovie } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movie-list">
        {loadingMovie ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
