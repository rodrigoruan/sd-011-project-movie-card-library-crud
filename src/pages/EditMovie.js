import React, { Component } from 'react';
import { Redirect } from 'react-router';

import { MovieForm, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.getMovieFromId = this.getMovieFromId.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getMovieFromId();
  }

  async handleRedirect() {
    this.setState({ shouldRedirect: true });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.handleRedirect();
  }

  async getMovieFromId() {
    const id = parseInt(window.location.pathname.split('/')[2], 10);
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      status: 'ready',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
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
