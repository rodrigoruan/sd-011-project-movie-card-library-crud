import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'
import * as movieAPI from '../services/movieAPI';


class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      
    };
  }

  async componentDidMount() {
    
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div>
        <Loading />
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
