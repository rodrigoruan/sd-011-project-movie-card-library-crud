import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: '',
    };
  }

  componentDidMount() {
    this.getMovieId();
  }

  async getMovieId() {
    const { match } = this.props;
    const { id } = await match.params;
    const get = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie: get,
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Title: ${title}` }</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
          </div>)}
      </div>
    );
  }
}

export default MovieDetails;
MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number }),
  }).isRequired,
};
