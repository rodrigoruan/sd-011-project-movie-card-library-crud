import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

// import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      charged: false,
    };
    this.fetchGetMovies = this.fetchGetMovies.bind(this);
  }

  componentDidMount() {
    this.fetchGetMovie();
  }

  async fetchGetMovie() {
    this.setState({ charged: true },
      async () => {
        const movieListApi = await movieAPI.getMovies();
        this.setState({ movies: movieListApi, charged: false });
      });
  }

  render() {
    const { movies, charged } = this.state;
    return (
      <div data-testid="movie-list">
        { charged ? <Loading /> : movies.map((movie) => (<MovieCard
          key={ movie.title }
          movie={ movie }
        />))}
      </div>
    );
  }
}

export default MovieList;
