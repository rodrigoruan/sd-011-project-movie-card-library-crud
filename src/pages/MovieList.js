import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.renderAllMovies = this.renderAllMovies.bind(this);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  async renderAllMovies() {
    const apiMovies = await movieAPI.getMovies();

    this.setState({
      movies: apiMovies,
      loading: false,
    })

  }

  componentDidMount() {
    
    this.renderAllMovies();
  }


  render() {
    const { movies } = this.state;
    const loadingMovie = <span><Loading /></span>

     
    return (
      <div data-testid="movie-list">
        
        {this.state.loading ? loadingMovie : movies.map((movie) =>  <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}


export default MovieList;
