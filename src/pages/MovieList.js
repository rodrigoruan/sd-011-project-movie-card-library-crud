import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom'

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
    if (loading) return <Loading />
    return (
      <div>
        <div>Movie Card Library CRUD</div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list" id="movieList">
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
            </div>
      </div>
    );
  }
}

export default MovieList;
