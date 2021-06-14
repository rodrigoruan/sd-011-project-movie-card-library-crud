import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.callState = this.callState.bind(this);
  }

  componentDidMount() {
    this.callState();
  }

  callState() {
    this.setState(
      { loading: true },
      async () => {
        this.setState({
          movies: await getMovies(),
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    if (loading === true) return (<Loading />);

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
