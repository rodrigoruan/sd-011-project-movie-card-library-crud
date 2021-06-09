import React, { Component } from 'react';
import { Loading } from '../components';
// import PropTypes from 'prop-types';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.gettingMovies = this.gettingMovies.bind(this);
  }

  componentDidMount() {
    this.gettingMovies();
  }

  async gettingMovies() {
    const response = await movieAPI.getMovies();

    this.setState({
      movies: response,
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        <Loading />
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

// MovieList.propTypes = {
//   getMovies: PropTypes.func.isRequired,
// };

export default MovieList;
