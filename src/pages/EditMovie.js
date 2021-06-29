import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovieSubmit = this.fetchMovieSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovieSubmit();
  }

  handleSubmit(updatedMovie) {
    this.setState({ loading: true }, async () => {
      await movieAPI.updateMovie(updatedMovie);
      this.setState({ loading: false, shouldRedirect: true });
    });
  }

  fetchMovieSubmit() {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({ loading: false, movie });
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
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
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  }).isRequired,
};
