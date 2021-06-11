import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.handleRequest();
  }

  async handleRequest() {
    this.setState({ loading: true });
    const request = await movieAPI.getMovies();
    this.setState({
      movies: request,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const loadingElement = <span>Carregando...</span>;

    return (
      <div data-testid="movie-list">
        { loading ? loadingElement
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
