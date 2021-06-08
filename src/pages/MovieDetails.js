import React, { Component } from 'react';

import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
    };

    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    const movie = this.props;
    console.log(movie);
    const { id } = movie.match.params;
    this.showMovie(id);
  }

  async showMovie(currentId) {
    this.setState(
      async () => {
        const movieToShow = await movieAPI.getMovie(currentId);
        this.setState({
          movie: movieToShow,
        });
      },
    );
  }

  renderMovie() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  render() {
    const { movie } = this.state;
    return (
      movie ? this.renderMovie() : <Loading />
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
