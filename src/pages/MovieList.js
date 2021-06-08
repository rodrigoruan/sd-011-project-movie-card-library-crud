import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.request = this.request.bind(this);
  }

  componentDidMount() {
    this.request();
  }

  async request() {
    const request = await movieAPI.getMovies();
    this.setState({
      movies: response,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> : movies.map((movie) => <MovieCard
          key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.PropTypes = {
  loading: PropTypes.bool,
};

export default MovieList;
