import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loader: false,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({ loader: true },
      async () => {
        const requestReturn = await movieAPI.getMovies();
        this.setState({
          loader: false,
          movies: requestReturn,
        });
      });
  }

  render() {
    const { movies, loader } = this.state;

    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        <span><Link to="/movies/new">ADICIONAR CARTÃO</Link></span>
        {loader
          ? <Loading />
          : (movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />))}
      </div>
    );
  }
}

export default MovieList;
