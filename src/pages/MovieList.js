import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.getAllMovies = this.getAllMovies.bind(this);
  }

  async getAllMovies() {
    const moviesGot = await movieAPI.getMovies();
    this.setState({
      movies: moviesGot,
      loading: false
      })
  }
  
  componentDidMount() {
    this.getAllMovies();
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
