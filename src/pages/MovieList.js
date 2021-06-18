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
      status: 'loading',
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState(() => (
      { movies, status: 'ready' }
    )));
  }

  render() {
    const { movies, status } = this.state;
    return (
      <div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        { status === 'loading' ? <Loading />
          : (
            <div data-testid="movie-list">
              {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
            </div>
          ) }
      </div>
    );
  }
}

export default MovieList;
