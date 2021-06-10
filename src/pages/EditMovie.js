import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      shouldRedirect: false,
      movieList: '',
    };

    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getMovieDetails();
  }

  getMovieDetails() {
    const { match } = this.props;
    movieAPI
      .getMovie(match.params.id)
      .then((movie) => this.setState({ movieList: movie, loading: false }));
  }

  handleSubmit = (updatedMovie) => {
    movieAPI
      .updateMovie(updatedMovie)
      .then((movie) => this.setState({ movieList: movie, shouldRedirect: true }));
  };

  render() {
    const { loading, shouldRedirect, movieList } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movieList } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
