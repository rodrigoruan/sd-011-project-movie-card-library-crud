import React, { Component } from 'react';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor({ match: { params: { id } } }) {
    super(id);
    this.state = {
      status: 'loading',
      shouldRedirect: true,
      mvId: id,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.movieObject = this.movieObject.bind(this);
  }

  componentDidMount() {
    this.movieObject();
  }

  handleSubmit(updatedMovie) {
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
