import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: true,
      shouldRedirect: false,
      movie: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.API = this.API.bind(this);
  }

  componentDidMount() {
    this.API();
  }

  handleSubmit(movieUp) {
    // não sabia como fazer, tive que ver em codigos no github.
    this.setState(
      { status: true },
      async () => {
        const upMovie = await movieAPI.updateMovie(movieUp);
        if (upMovie === 'OK') {
          this.setState({
            status: false,
            shouldRedirect: true,
          });
        }
      },
    );
  }

  async API() {
    const { match: { params: { id } } } = this.props;
    const movieApi = await movieAPI.getMovie(id);
    this.setState({
      status: false,
      movie: movieApi,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status) {
      // render Loading
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
