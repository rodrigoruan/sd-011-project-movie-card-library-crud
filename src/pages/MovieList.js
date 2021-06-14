import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
      this.fetchMovie();
    }
  
    async fetchMovie() {
      this.setState(
        { loading: true },
        async () => {
          const requestObject = await movieAPI.getMovies();
          this.setState({
            loading: false,
            movies: requestObject,
          });
        },
      );
    }
  
    render() {
      const { loading, movies } = this.state;
      const loadingElement = <Loading />; 

      return (
        <div data-testid="movie-list">
           {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />))}
        <Link to="/movies/new"> ADICIONAR CARTÃO </Link>
      </div>
    );
  }
}
export default MovieList;
