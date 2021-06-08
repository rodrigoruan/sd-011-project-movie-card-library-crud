import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };

    this.onMount = this.onMount.bind(this);
    this.renderMovieCards = this.renderMovieCards.bind(this);
  }

  async componentDidMount() {
    this.onMount();
  }

  onMount() {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
      async () => {
        const requestedMovies = await movieAPI.getMovies();
        console.log(requestedMovies);
        this.setState({
          loading: false,
          movies: requestedMovies,
        });
      },
    );
  }

  renderMovieCards() {
    const { movies } = this.state;
    return (movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />));
  }

  render() {
    const { loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : this.renderMovieCards() }
      </div>
    );
  }
}

export default MovieList;
