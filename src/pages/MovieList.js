import React, { Component } from 'react';
import Loading from '../components/Loading';
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

  componentDidMount() {
    getMovies().then((movies) => {
      this.handleState(movies);
    });
  }

  handleState(movies) {
    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { loading, movies } = this.state;
    if (loading) {
      return <Loading />;
    }

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
