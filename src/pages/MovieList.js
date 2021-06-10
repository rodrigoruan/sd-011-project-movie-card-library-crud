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
    movieAPI.getMovies()
      .then((movies) => {
        this.setState({ movies, loading: false });
      });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : (
          <section>
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          </section>)}
      </div>
    );
  }
}

export default MovieList;
