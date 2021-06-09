import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.state = {
      id,
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { id } = this.state;
    console.log(id);
    this.getMovieDetails(id);
  }

  async componentDidUpdate() {
    const { movie } = this.state;
    await movieAPI.updateMovie(movie);
  }

  handleSubmit(updatedMovie) {
    this.setState({
      movie: updatedMovie,
      shouldRedirect: true,
    });
  }

  async getMovieDetails(id) {
    const movie2 = await movieAPI.getMovie(id);
    console.log(movie2);
    this.setState({
      status: 'loaded',
      movie: movie2,
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

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;
