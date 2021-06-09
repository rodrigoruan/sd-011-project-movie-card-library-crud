import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({ movies, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <main>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </main>
    );
  }
}

export default MovieList;
