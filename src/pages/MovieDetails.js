import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovie } from '../services/movieAPI';
// import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movieInfo: [],
    };
    this.fetchMovies = this.fetchMovies.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
  }

  componentDidMount() {
    this.handleLoading();
  }

  handleLoading() {
    const timer = 2000;
    setTimeout(() => {
      this.fetchMovies();
    }, timer);
  }

  fetchMovies() {
    getMovie()
      .then((movieInfo) => {
        this.setState({ movieInfo });
      });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movieInfo } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movieInfo;

    return (
      <div data-testid="movie-details">
        { console.log(movieInfo) }
        <button type="button" onClick={ this.fetchMovies }>clica em mim vai =D</button>
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

MovieDetails.protoTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
