import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor({ match: { params: { id } } }) {
    super(id);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      mvId: id,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.movieObject = this.movieObject.bind(this);
  }

  componentDidMount() {
    this.movieObject();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async movieObject() {
    const { mvId } = this.state;
    this.setState({
      movie: await movieAPI.getMovie(mvId),
      status: 'loaded',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.objectOf().isRequired,
};
