import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderMovieForm = this.renderMovieForm.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  handleSubmit(updatedMovie) {
    // updatedMovie são os novos valores filme
    movieAPI.updateMovie(updatedMovie).then(this.setState({ shouldRedirect: true }));
  }

  async getMovie() {
    this.setState(
      { loading: true },
      async () => {
        const { match } = this.props;
        const { params } = match;
        const { id } = params;
        const requestMovie = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: requestMovie,
        });
      },
    );
  }

  renderMovieForm() {
    const { movie } = this.state;
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }

  render() {
    const { loading, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <span>
        { loading ? <Loading /> : this.renderMovieForm() }
      </span>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default EditMovie;
