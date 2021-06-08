import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.renderMovieCards = this.renderMovieCards.bind(this);
  }

  async componentDidMount() {
    const { getMovies } = movieAPI;
    const data = await getMovies();
    this.setState(
      ({ loading: true }), 
      () => this.setState(() => ({
        movies: data,
        loading: false,
      }))
      )
  }

  renderMovieCards() {
    const { movies } = this.state;
    return (
      movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
    )
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : this.renderMovieCards()}
      </div>
    );
  }
}

export default MovieList;
