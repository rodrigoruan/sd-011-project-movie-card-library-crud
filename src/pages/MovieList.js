import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loaded: true,
    };
  }

  componentDidMount() {
    this.getAPI();
  }

  async getAPI() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loaded: false,
    });
  }

  render() {
    const { loaded, movies } = this.state;

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        { loaded ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movie: PropTypes.shape({ }).isRequired,
};
