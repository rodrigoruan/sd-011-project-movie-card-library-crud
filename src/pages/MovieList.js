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
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movie) => {
        this.setState({ movies: movie, loading: false });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { movies,loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
      {loading ? <Loading/> : movies.map((movie)=>
      <MovieCard key={movie.title} movie={movie}/>)}        
      </div>
    );
  }
}

export default MovieList;
