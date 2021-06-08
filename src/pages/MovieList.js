import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const requestObject = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: requestObject,
        });
      },
    );
  }

  render() {
    const { loading, movies } = this.state;
    const loadingElement = <Loading />; // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { loading ? loadingElement : movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />)) }
      </div>
    );
  }
}

export default MovieList;
