import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    this.gettingMovies();
  }

  async gettingMovies() {
    const response = await movieAPI.getMovies();

    this.setState({
      movies: response,
      isLoading: false,
    });
  }

  render() {
    const { movies, isLoading } = this.state;
    return isLoading ? <Loading /> : (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

// MovieList.propTypes = {
//   getMovies: PropTypes.func.isRequired,
// };

export default MovieList;
