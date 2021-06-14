import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieApi = this.getMovieApi.bind(this);
  }

  componentDidMount() {
    this.getMovieApi();
  }

  async handleSubmit(updatedMovie) {
    const getUpdate = await movieAPI.updateMovie(updatedMovie);
    this.setState({
      movie: getUpdate,
      shouldRedirect: true,
    });
  }

  async getMovieApi() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const getMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: getMovie,
      status: false,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;
