import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.renderMovieList = this.renderMovieList.bind(this);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const { getMovies } = movieAPI;
    this.setState(
      { loading: true },
      async () => {
        const resquestMovie = await getMovies();
        this.setState({
          loading: false,
          movies: resquestMovie,
        });
      },
    );
  }

  renderMovieList() {
    const { movies } = this.state;

    return (
      <div className="movieListContainer" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <div className="loadingEl">Carregando...</div>;

    // Render Loading here if the request is still happening
    return (
      <div>
        { loading ? loadingElement : this.renderMovieList() }
      </div>
    );
  }
}

export default MovieList;
