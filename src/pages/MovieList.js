import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      load: true,
    };

    this.getMovies = this.getMovies.bind(this);
    this.renderMovieCard = this.renderMovieCard.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      load: false,
    });
  }

  renderMovieCard() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }

  render() {
    const { load } = this.state;
    const loadingComponent = <Loading />;
    const movieCardComponent = this.renderMovieCard();

    return (
      <div>
        { load ? loadingComponent : movieCardComponent }
      </div>
    );
  }
}

export default MovieList;
