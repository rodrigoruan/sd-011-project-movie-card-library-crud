import React, { Component } from 'react';
import { Redirect } from 'react-router';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() { this.setMovieState(); }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async setMovieState() {
    this.setState({ status: 'loading' });
    const { match } = this.props;
    const { id } = match.params;
    const selectedMovie = await movieAPI.getMovie(id);

    this.setState({
      movie: selectedMovie,
      status: '',
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
