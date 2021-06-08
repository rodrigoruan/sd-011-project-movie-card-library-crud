import React, { Component } from "react";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import * as movieAPI from "../services/movieAPI";

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }
  async componentDidMount() {
    const response = await movieAPI.getMovies();
    this.setState({ movies: response });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return movies.length >0? (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
          
        ))}
      </div>
    ):(<Loading/>);
  }
}

export default MovieList;
