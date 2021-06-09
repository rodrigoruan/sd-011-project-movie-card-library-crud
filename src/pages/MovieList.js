import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

export default class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
    this.renderMovies = this.renderMovies.bind(this);
    this.loadingScreen = this.loadingScreen.bind(this);
    this.renderMovieCards = this.renderMovieCards.bind(this);
  }

  componentDidMount() {
    this.renderMovies();
  }

  renderMovies = () => {
    this.setState({ loading: true }, async () => {
      const newMovie = await movieAPI.getMovies();
      this.setState({ movies: newMovie, loading: false });
    });
  };

  loadingScreen = () => <div> Carregando...</div>;

  renderMovieCards = () => {
    const { movies } = this.state;
    return (
      <div>
        <button type="button" className="btn btn-success">
          <Link className="btn btn-success add-link" to="/movies/new">
            ADICIONAR CARTÃO
          </Link>
        </button>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />
          ))}
        </div>
      </div>
    );
  };

  render() {
    const { loading } = this.state;
    return loading ? this.loadingScreen() : this.renderMovieCards();
  }
}
