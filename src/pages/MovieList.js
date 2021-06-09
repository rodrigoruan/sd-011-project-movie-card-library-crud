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
    this.fetchData();
  }

  async fetchData() {
    this.setState(
      { isLoading: true },
      async () => {
        try {
          const response = await movieAPI.getMovies();
          this.setState({
            movies: [...response],
            isLoading: false,
          });
        } catch (error) {
          console.log(error);
        }
      },
    );
  }

  render() {
    const { movies, isLoading } = this.state;
    const loadingMessage = <span>Carregando...</span>;
    return (
      <div data-testid="movie-list">
        {isLoading
          ? loadingMessage
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
