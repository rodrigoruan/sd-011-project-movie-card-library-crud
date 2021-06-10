import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      shouldRedirect: false,
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTheMovie = this.getTheMovie.bind(this);
  }

  componentDidMount() {
    this.getTheMovie();
  }

  // nesta etapa que ocorre a edição do arquivo
  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  // */Para resolver esta parte eu tive a ajuda do Mauricio Shoiti Leiri
  // */Source: https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/18
  //  encontrar o filme a ser editado
  async getTheMovie() {
    const { match: { params: { id } } } = this.props;
    const movietoBeEdit = await movieAPI.getMovie(id);
    this.setState({
      movie: movietoBeEdit,
      status: 'loaded',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
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

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
