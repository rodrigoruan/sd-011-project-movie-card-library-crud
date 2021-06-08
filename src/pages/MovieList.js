import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.loadingTrue = this.loadingTrue.bind(this);
  }

  async componentDidMount() {
    const newRequest = await movieAPI.getMovies();
    this.loadingTrue(newRequest);
  }

  loadingTrue(param) {
    this.setState({
      loading: false,
      movies: param,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div data-testid="movie-list">
            {movies.map((movie) => (
              <MovieCard key={ movie.title } movie={ movie } />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default MovieList;
