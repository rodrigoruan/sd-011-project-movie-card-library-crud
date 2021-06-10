import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieCover from './MovieCover';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      isLoad: false,
    };
  }

  componentDidMount() {
    this.isreturn();
  }

  async isreturn() {
    const getMovie = await movieAPI.getMovie();
    this.setState({
      movie: getMovie,
      isLoad: true,
    });
  }

  render() {
    const { movie, isLoad } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (isLoad) return <Loading />;
    return (
      <MovieCover
        title={ title }
        storyline={ storyline }
        imagePath={ imagePath }
        genre={ genre }
        rating={ rating }
        subtitle={ subtitle }
        id={ id }
      />
    );
  }
}

export default MovieDetails;
