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
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({ movies, loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    const movieList = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    const AddCardLink = <Link key="addCard" to="/movies/new">ADICIONAR CARTÃO</Link>;

    return (
      <div data-testid="movie-list">
        {
          loading
            ? <Loading />
            : movieList.concat([AddCardLink])
        }
      </div>
    );
  }
}

export default MovieList;
