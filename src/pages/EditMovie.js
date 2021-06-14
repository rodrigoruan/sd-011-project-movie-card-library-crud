import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    this.state = {
      movieId: match.params.id,
      loading: true,
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnMovie = this.returnMovie.bind(this);
  }

  componentDidMount() {
    const { movieId } = this.state;
    movieAPI.getmovie(movieId)
      .then((movie) => this.setState({
        movie,
        loading: false,
      }));
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(
      this.setState({
        movie: updatedMovie,
        shouldRedirect: true,
      }),
    );
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

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
