import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';
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

  async getMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({ 
      movies: movies,
      load: false
    });
  }

  renderMovieCard() {
    return (
      <div data-testid="movie-list">
        {this.state.movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    )
  }

  componentDidMount() {
    this.getMovies();
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
