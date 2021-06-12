import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { status: true, shouldRedirect: false, movie: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.editThisMovie = this.editThisMovie.bind(this);
  }

  componentDidMount() {
    const movie = this.props;
    const { id } = movie.match.params;

    this.editThisMovie(id);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updatedMovie(updatedMovie);

    this.setState({ shouldRedirect: true });
  }

  async editThisMovie(movieID) {
    const { getMovie } = movieAPI;
    const editMovie = await getMovie(movieID);

    this.setState({ status: false, movie: editMovie });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return (<Redirect to="/" />);

    if (status === 'loading') return (<Loading />);

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
      id: PropTypes.string,
    }) }).isRequired,
};

export default EditMovie;
