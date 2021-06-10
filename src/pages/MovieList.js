import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.getAllMovies = this.getAllMovies.bind(this);
  }

  componentDidMount() {
    this.getAllMovies();
  }

  async getAllMovies() {
    const moviesGot = await movieAPI.getMovies();
    this.setState({
      movies: moviesGot,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    if (loading) return <Loading />;
    return (
      <div>
        <div>Movie Card Library CRUD</div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list" className="movieList">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
