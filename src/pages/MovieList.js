import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchAPI = this.fetchAPI.bind(this);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI() {
    this.setState(() => ({ loading: true }), async () => {
      const movies = await movieAPI.getMovies();
      this.setState({ movies, loading: false });
    });
  }

  render() {
    const { movies, loading } = this.state;
    const loadingElement = <p>Carregando...</p>;
    return (
      <div data-testid="movie-list">
        {
          loading
            ? loadingElement
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
