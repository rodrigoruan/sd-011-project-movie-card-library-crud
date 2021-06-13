import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

export default class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = { status: true, shouldRedirect: false, movie: '' };

    this.editMovieAux = this.editMovieAux.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const movie = this.props;
    const { id } = movie.match.params;

    this.editMovieAux(id);
  }

  handleSubmit(movie) {
    movieAPI.updateMovie(movie);

    this.setState({ shouldRedirect: true });
  }

  async editMovieAux(currentID) {
    const { getMovie } = movieAPI;
    const movieToEdit = await getMovie(currentID);

    this.setState({ status: false, movie: movieToEdit });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return (<Redirect to="/" />);
    if (status) return (<Loading />);

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
