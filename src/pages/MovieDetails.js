import React, { Component } from 'react';
import { getMovies } from '../services/movieAPI';
// import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  fetchMovies() {
    getMovies()
      .then((recevedContent) => recevedContent
        .forEach((value) => value));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.fetchMovies;

    return (
      <div data-testid="movie-details">
        <p>{ title }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

export default MovieDetails;
