import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    // this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const moviesList = await movieAPI.getMovies();
    this.setState({ movies: moviesList, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {/* {
          if(loading)  <Loading />;
          else movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
        } */}
        {loading ? <Loading /> : movies.map(
          (movie) => <MovieCard key={ movie.title } movie={ movie } />,
        )}

        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
