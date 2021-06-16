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
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => {
        this.setState({ movies, loading: false });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <main>
        <button type="button">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </button>

        <ul data-testid="movie-list">
          {loading ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </ul>
      </main>
    );
  }
}

export default MovieList;
