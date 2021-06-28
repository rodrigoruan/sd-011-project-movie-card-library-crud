import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      itsLoading: true,
    };
  }

  componentDidMount() {
    this.getMoviesData();
  }

    // Render Loading here if the request is still happening
    getMoviesData = async () => {
      const returnApi = await movieAPI.getMovies();
      this.setState({
        movies: returnApi,
        itsLoading: false,
      });
    }

    render() {
      const { movies, itsLoading } = this.state;
      return (
        <div data-testid="movie-list">
          {
            itsLoading ? <Loading />
              : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          }
        </div>
      );
    }
}

export default MovieList;
