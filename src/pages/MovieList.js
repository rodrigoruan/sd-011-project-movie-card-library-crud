import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import '../css/Crud.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.renderMoviesElement = this.renderMoviesElement.bind(this);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    this.setState(
      { loading: true },
      async () => {
        const requestMovies = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: requestMovies,
        });
      },
    );
  }

  renderMoviesElement() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list" className="movie-card-container">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    // Render Loading here if the request is still happening
    return (
      <span>
        { loading ? <Loading /> : this.renderMoviesElement() }
      </span>
    );
  }
}

export default MovieList;
