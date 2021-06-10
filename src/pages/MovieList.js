import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((response) => this.setState({ movies: response }));
  }

  render() {
    const { movies } = this.state;

    if (!movies.length) {
      return (<Loading />);
    }

    return (
      <>
        <div className="add-header">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div className="container" data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </>
    );
  }
}

export default MovieList;
