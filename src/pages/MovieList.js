import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      status: true,
    };

    this.listMovies = this.listMovies.bind(this);
    this.renderAux = this.renderAux(this);
  }

  componentDidMount() {
    this.listMovies();
  }

  async listMovies() {
    const { getMovies } = movieAPI;
    const list = await getMovies();

    this.setState({
      movies: list,
      status: false,
    });
  }

  renderAux() {
    const { movies } = this.state;

    return (
      <div>
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div data-testid="movie-list">
          { movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />) }
        </div>
      </div>
    );
  }

  render() {
    const { status } = this.state;

    // Render Loading here if the request is still happeningw
    return (
      status ? <Loading /> : this.renderAux()
    );
  }
}

export default MovieList;
