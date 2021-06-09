import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
// import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.fetchAPI = this.fetchAPI.bind(this); 
    
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const data = await movieAPI.getMovies();
    this.setState({ movies: data });
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
