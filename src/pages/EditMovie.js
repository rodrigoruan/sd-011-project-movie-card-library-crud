import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async getMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;
    const request = await getMovie(id);
    this.setState({
      movie: request,
      status: 'complete',
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

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
