import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: true,

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fetchMovies() {
    const { match } = this.props;
    const { id } = match.params;
    const movies = await movieAPI.getMovie(id);
    this.setState({
      movie: movies,
      status: 'false',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    // if (status === 'loading') {
    //   // render Loading
    //   return <Loading />;
    // }

    return (
      <div data-testid="edit-movie">
        {status === 'loading' ? <Loading /> : <MovieForm
          movie={ movie }
          onSubmit={ this.handleSubmit }
        />}
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
