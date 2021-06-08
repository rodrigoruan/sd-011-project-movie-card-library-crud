import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((data) => {
      console.log(data);
      this.setState({
        movies: data,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid='movie-list'>
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
        <p>{loading ? <Loading /> : null}</p>
      </div>
    );
  }
}

export default MovieList;
