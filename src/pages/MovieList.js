import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: false,
    };

    this.getMovieList = this.getMovieList.bind(this);
  }

  componentDidMount() {
    this.getMovieList();
  }

  async getMovieList() {
    this.setState({ loading: true });
    const movieList = await movieAPI.getMovies();
    this.setState({ movies: movieList });
    this.setState({ loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        { loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link from="/" to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
