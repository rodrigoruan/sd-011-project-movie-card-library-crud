import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.requestMovies();
  }

  async requestMovies() {
    this.setState(
      { isLoading: true },
      async () => {
        await movieAPI.getMovies()
          .then((response) => {
            this.setState({
              movies: [...response],
              isLoading: false,
            });
          });
      },
    );
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening
    if (isLoading) {
      return <p>Carregando...</p>;
    }

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
