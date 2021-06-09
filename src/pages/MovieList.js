import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.handleMovies();
  }

 handleMovies = async () => {
   this.setState({ loading: true }, () => {
     movieAPI.getMovies()
       .then((data) => {
         this.setState({ movies: data, loading: false });
       });
   });
 }

 showMovies(movies) {
   return (
     <>
       <Link to="/movies/new">ADICIONAR CARTÃO</Link>
       <div data-testid="movie-list">
         {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
       </div>
     </>
   );
 }

 render() {
   const { movies, loading } = this.state;
   return loading ? <Loading /> : this.showMovies(movies);
 }
}

export default MovieList;
