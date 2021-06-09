import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.state = {
      status: 'loading',
      shouldRedirect: '',
      movieId: id,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;

    const successStatus = await updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: successStatus,
    });
  }

  async fetchMovie() {
    const { getMovie } = movieAPI;
    const { movieId } = this.state;

    this.setState(
      { status: 'loading' },
      async () => {
        const resquestMovie = await getMovie(movieId);
        this.setState({
          status: '',
          movie: resquestMovie,
        });
      },
    );
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

EditMovie.propTypes = {
  match: {
    params: {
      id: PropTypes.number,
    },
  }.isRequired,
};

export default EditMovie;
