import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading'

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({ loading: true });
    const moviesList = await movieAPI.getMovies();
    this.setState({
      movies: moviesList,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />  
    };
    return (
      <div data-testid="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
