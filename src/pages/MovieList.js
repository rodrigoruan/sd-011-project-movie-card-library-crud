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

    this.showMovieList = this.showMovieList.bind(this);
    this.renderCard = this.renderCard.bind(this);
  }

  componentDidMount() {
    this.showMovieList();
  }

  async showMovieList() {
    const { getMovies } = movieAPI;
    const movieList = await getMovies();
    this.setState({
      movies: movieList,
      status: false,
    });
  }

  renderCard() {
    const { movies } = this.state;
    return (
      <main>
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div data-testid="movie-list">
          {
            movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)
          }
        </div>
      </main>
    );
  }

  render() {
    const { status } = this.state;

    return (
      status ? <Loading /> : this.renderCard()
    );
  }
}

export default MovieList;
