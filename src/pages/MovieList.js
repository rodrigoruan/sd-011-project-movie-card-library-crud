import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };

    this.fetchMovie = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const requestObject = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: requestObject,
        });
      },
    );
  }

  render() {
    const { loading, movies } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <div className="container">
        <div className="containerMovies" data-testid="movie-list">
          {movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />))}
        </div>
        <div className="containerNewMovie">
          <Link className="button" to="/movies/new"> ADICIONAR CARTÃO </Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
