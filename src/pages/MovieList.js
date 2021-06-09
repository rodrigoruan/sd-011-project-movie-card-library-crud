import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import style from './MovieList.module.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();

    this.setState({
      loading: false,
      movies,
    });
  }

  render() {
    const { loading, movies } = this.state;

    return (
      <>
        <Link to="/movies/new" className={ style.addMovieLink }>ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list" className={ style.container }>
          {
            loading
              ? <Loading />
              : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          }
        </div>
      </>
    );
  }
}

export default MovieList;
