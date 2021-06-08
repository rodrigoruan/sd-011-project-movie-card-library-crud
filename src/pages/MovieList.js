import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: '',
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((filmes) => this.setState({
      movies: filmes,
    }))
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
       { movies ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) : <Loading /> }
      </div>
    );
  }
}

export default MovieList;
