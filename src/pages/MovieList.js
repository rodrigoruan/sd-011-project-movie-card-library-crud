import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      msg: true,
    };

    this.saveMovie = this.saveMovie.bind(this);
  }

  async componentDidMount() {
    const request = await movieAPI.getMovies(); /* Esta linha foi feita com a ajuda do Vinicius Gouveia */
    this.saveMovie(request);
  }

  saveMovie(resolve) {
    this.setState({
      movies: resolve,
      msg: false,
    });
  }

  render() {
    const { movies, msg } = this.state;
    return (
      <div data-testid="movie-list">
        {msg ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
