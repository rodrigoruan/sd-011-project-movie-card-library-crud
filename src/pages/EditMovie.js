import React, { Component } from 'react';
import { Redirect } from 'react-router';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: [],
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fechApi();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async fechApi() {
    const { match } = this.props;
    const { id } = match.params;
    const movieResolve = await movieAPI.getMovie(id);
    this.setState({
      movie: movieResolve,
      loading: false,
    });
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return loading ? <Loading /> : (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
