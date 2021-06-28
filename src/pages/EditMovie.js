import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

export default class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getMovieData(id);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  getMovieData = async (id) => {
    const returnApi = await movieAPI.getMovie(id);
    this.setState({
      movie: returnApi,
      status: null,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (status === 'loading') return <Loading />;

    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="edit-movie" />
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape(PropTypes.object).isRequired,
};
