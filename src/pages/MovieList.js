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
    this.renderCards = this.renderCards.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  render() {
    async fetchMovie() {
      this.setState(
        { loading: true },
        async () => {
        const requestObject = await movieAPI.getMovies();
        this.setState({ 
          loading: false,
          movies: requestObject,
        })
      })
    }
  
    componentDidMount() {
      this.fetchMovie();
    }
  
    renderCards() {
    const { movies } = this.state;
    {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
  }

    // Render Loading here if the request is still happening
    render() {
      const { loading } = this.state;
      const loadingElement = <Loading /> 

    return (
      <div data-testid="movie-list">
        {loading ? loadingElement : this.renderCards() }
      </div>
    );
  }
}

export default MovieList;
