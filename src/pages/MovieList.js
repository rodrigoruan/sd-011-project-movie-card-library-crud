// Requisito resolvido com consultas ao sites abaixo
// e aos projetos Movie Card Library e Stateful:
// https://app.betrybe.com/course/live-lectures/sd-cohort-8#aula-132-react-router
// https://www.youtube.com/watch?v=6ZVUCiriOZ4
// https://www.youtube.com/watch?v=h0sNAXE1ozo

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
    this.filmsList = this.filmsList.bind(this);
  }

  componentDidMount() {
    this.filmsList();
  }

  async filmsList() {
    const listFilms = await movieAPI.getMovies();
    this.setState({ movies: listFilms, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading === true) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
