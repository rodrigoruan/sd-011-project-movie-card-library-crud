import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = { movies: [], status: true };

    this.movieList = this.movieList.bind(this);
    this.renderAux = this.renderAux.bind(this);
  }

  componentDidMount() {
    this.movieList();
  }

  async movieList() {
    const { getMovies } = movieAPI;
    const movieList = await getMovies();

    this.setState({ movies: movieList, status: false });
  }

  renderAux() {
    const { movies } = this.state;

    return (
      <main>
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div data-testid="movie-list">
          { movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
        </div>
      </main>
    );
  }

  render() {
    const { status } = this.state;

    return status ? <Loading /> : this.renderAux();
  }
}

export default MovieList;
