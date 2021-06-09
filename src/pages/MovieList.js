import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      load: true,
    };
  }

  componentDidMount() {
    this.funcMovie();
  }

  async funcMovie() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      load: false,
    });
  }

  render() {
    const { movies, load } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { load === true ? <Loading /> : movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
