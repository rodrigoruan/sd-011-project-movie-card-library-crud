import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import './style.css';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI
      .getMovies()
      .then((movie) => {
        this.setState({ movies: movie, loading: false });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <main>
        <button type="button">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </button>
        <div className="movie-list " data-testid="movie-list">
          {loading ? (
            <Loading />
          ) : (
            movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          )}
        </div>
      </main>
    );
  }
}

export default MovieList;
