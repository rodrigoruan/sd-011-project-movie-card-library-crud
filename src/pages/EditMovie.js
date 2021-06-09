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
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getMovieDetails();
  }

  async handleSubmit(updatedMovie) {
    this.setState({ status: 'loading' });
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      status: 'loaded',
      shouldRedirect: true,
      movie: { ...updatedMovie },
    });
  }

  async getMovieDetails() {
    const { match } = this.props;
    const movieDetails = await movieAPI.getMovie(match.params.id);
    this.setState({
      status: 'loaded',
      movie: movieDetails,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
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
