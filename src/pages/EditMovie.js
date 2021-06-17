import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router';
import { MovieForm } from '../components';
import { updateMovie, getMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const movieApi = await getMovie(id);
    this.setMovie(movieApi);
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  setMovie(movie) {
    this.setState(
      { movie,
        status: 'load',
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <h2 data-testid="edit-movie">Carregando...</h2>;
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
