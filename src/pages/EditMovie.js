import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: null,
    };

    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.getMovieDetails();
    movieAPI
      .getMovie(this.props.match.params.id)
      .then((movie) => this.setState({ movie, loading: false }));
  }

  async getMovieDetails() {
    const { match } = this.props;
    const movieDetails = await movieAPI.getMovie(match.params.id);
    this.setState({
      movie: movieDetails,
      status: 'loaded',
    });
  }

  async handleSubmit(updatedMovie) {
    console.log(updatedMovie);
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      movie: updatedMovie,
      shouldRedirect: true,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    console.log('queremos ver', movie);
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
