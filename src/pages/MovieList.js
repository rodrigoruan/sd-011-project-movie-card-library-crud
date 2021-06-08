import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  handleState(movies) {
    this.setState({
      movies,
      loading: false,
    })
  }
  componentDidMount() {
    getMovies().then((movies) => {
      this.handleState(movies)
    })
  }

  render() {
    const { movies, loading} = this.state;

    if(loading) {
      return (
        <Loading />
      )
    }

    return (
      <div data-testid="movie-list" style={ { border: '4px solid red' } }>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
