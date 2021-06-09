import React, { Component } from 'react';
import { Loading } from '../components';
// import PropTypes from 'prop-types';
import MovieCard from '../components/MovieCard';
import '../App.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };

    this.gettingMovies = this.gettingMovies.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: false });
    this.gettingMovies();
  }

  async gettingMovies() {
    const response = await movieAPI.getMovies();

    this.setState({
      movies: response,
    });
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <div data-testid="movie-list">
        isLoading
        ?
        <Loading />
        :
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

// MovieList.propTypes = {
//   getMovies: PropTypes.func.isRequired,
// };

export default MovieList;
