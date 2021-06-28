import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      firstLoad: true,
    };
    this.fetchGetMovies = this.fetchGetMovies.bind(this);
  }

  componentDidMount() {
    this.fetchGetMovies();
  }

  async fetchGetMovies() {
    const { getMovies } = movieAPI;
    const search = await getMovies();
    this.setState({ movies: search, firstLoad: false });
  }

  render() {
    const { movies, firstLoad } = this.state;
    return (
      <div data-testid="movie-list">
        {firstLoad ? <Loading /> : movies.map((movie) => (<MovieCard
          key={ movie.title }
          movie={ movie }
        />))}
        <button type="button"><Link to="/movies/new">ADICIONAR CARTÃO</Link></button>
      </div>
    );
  }
}

export default MovieList;
