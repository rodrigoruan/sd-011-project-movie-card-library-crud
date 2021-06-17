import React, { Component } from 'react';

import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import { updateMovie, getMovie } from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.gtMovie();
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  setMovie(movie) {
    this.setState(
      { movie,
        loading: false,
      },
    );
  }

  async gtMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const takedMovie = await getMovie(id);
    this.setMovie(takedMovie);
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading === true) {
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
  id: PropTypes.isRequired,
  match: PropTypes.isRequired,
};

export default EditMovie;
