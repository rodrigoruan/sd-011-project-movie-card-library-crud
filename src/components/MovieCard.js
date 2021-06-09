import React from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';
import { getMovies } from '../services/movieAPI';

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: [],
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.handleLoading();
  }

  handleLoading() {
    const timer = 2000;
    setTimeout(() => {
      this.fetchMovies();
    }, timer);
  }

  fetchMovies() {
    getMovies()
      .then((recevedContent) => recevedContent
        .forEach((movie) => {
          this.setState({
            movie,
          });
        }));
  }

  render() {
    const { movie } = this.state;
    return (
      <div data-testid="movie-card">
        <MovieDetails key={ movie.title } movie={ movie } />
        <span>
          <Link to="movies/:id">VER DETALHES</Link>
        </span>
      </div>
    );
  }
}

export default MovieCard;
