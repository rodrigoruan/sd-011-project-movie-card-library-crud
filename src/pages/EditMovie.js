import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    // const { match } = this.props;
    const { id } = match.params;
    this.state = {
      loading: true,
      movie: {},
      shouldRedirect: false,
      id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnMovie = this.returnMovie.bind(this);
  }

  componentDidMount() {
    this.returnMovie();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async returnMovie() {
    const { id } = this.state;
    const selectedMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: selectedMovie,
      loading: false,
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

EditMovie.prototypes = {
  match: PropTypes.object,
  params: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default EditMovie;
