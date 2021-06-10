import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.fApi = this.fApi.bind(this);
  }

  componentDidMount() {
    this.fApi();
  }

  async fApi() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
    });
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
