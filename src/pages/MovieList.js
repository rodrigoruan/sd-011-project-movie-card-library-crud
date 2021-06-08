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

    this.renderCards = this.renderCards.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  async fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
      const requestObject = await movieAPI.getMovies();
      this.setState({ 
        loading: false,
        movies: requestObject,
      })
    })
  }

  componentDidMount() {
    this.fetchMovie();
  }

  renderCards() {
    const { movies } = this.state;
    {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <Loading /> // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? loadingElement : this.renderCards() }
      </div>
    );
  }
}

export default MovieList;
