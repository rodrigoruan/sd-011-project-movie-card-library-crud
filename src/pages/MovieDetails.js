import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieDetailsCard from '../components/MovieDetailsCard';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movieDetail: {},
    };

    this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  componentDidMount() {
    this.getMovieDetails();
  }

  async getMovieDetails() {
    const { match } = this.props;
    const movieDetails = await movieAPI.getMovie(match.params.id);
    this.setState({
      loading: false,
      movieDetail: movieDetails,
    });
    console.log(movieDetails);
  }

  render() {
    const { loading, movieDetail } = this.state;

    return (
      <div>
        {loading ? <Loading /> : <MovieDetailsCard movieDetail={ movieDetail } />}
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
