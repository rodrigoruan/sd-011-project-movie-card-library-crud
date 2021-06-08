import React, { Component } from 'react';
// import { Loading } from './components';
import MovieCard from './components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from './components';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movies: [],
    };
    this.listaMovies = this.listaMovies.bind(this);
  }

  componentDidMount() {
    this.listaMovies();
  }

  listaMovies = async () => {
    const filmes = await movieAPI.getMovies();
    console.log(filmes);
    this.setState({ movies: filmes, loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))}
      </div>
    );
  }
}

export default MovieList;
