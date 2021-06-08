import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  // constructor(props) {
  //   super(props);
  //   const { movies } = this.props;
  //   this.state = {
  //     movies,
  //   };
  //   this.createMovie = this.createMovie.bind(this);
  // }

  // createMovie(movie) {
  //   this.setState((state) => ({
  //     movies: [...state.movies, movie],
  //   }));
  // }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.createMovie } />
      </div>
    );
  }
}
export default NewMovie;
