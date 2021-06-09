import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

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
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getMovieDetails();
  }

  async componentWillUnmount() {
    await this.deleteMovie();
  }

  async getMovieDetails() {
    const { match } = this.props;
    const movieDetails = await movieAPI.getMovie(match.params.id);
    this.setState({
      loading: false,
      movieDetail: movieDetails,
    });
  }

  async deleteMovie() {
    const { match } = this.props;
    await movieAPI.deleteMovie(match.params.id);
    return <Redirect to="/" />;
  }

  render() {
    const { loading, movieDetail } = this.state;
    return (
      <div>
        {loading ? <Loading /> : <MovieDetailsCard movieDetail={ movieDetail } />}
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
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
