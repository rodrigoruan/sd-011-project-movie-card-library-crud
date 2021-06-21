import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.editMovie = this.editMovie.bind(this);

    this.state = {
      status: 'loading',
      id: props.match.params.id,
      shouldRedirect: false,
      movie: '',
    };
  }

  componentDidMount() {
    this.editMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);

    this.setState({
      shouldRedirect: true,
    });
  }

  async editMovie() {
    const { id } = this.state;
    const getMovieEdit = await movieAPI.getMovie(id);

    this.setState({
      movie: getMovieEdit,
      status: 'loaded',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return (
        <Loading />
      );
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
  match: PropTypes.string,
  params: PropTypes.string,
  id: PropTypes.string,
};

EditMovie.defaultProps = {
  match: undefined,
  params: undefined,
  id: undefined,
};
