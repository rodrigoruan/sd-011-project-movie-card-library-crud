import React, { Component } from 'react';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = props;
    this.state = { id };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.asyncGetMovie = this.asyncGetMovie.bind(this);
  }

  handleSubmit(updatedMovie) {
  }

  // -----------------------------------------------
  // Fazer essa função atualizar o  state com os valores do objeto correspondente ao id
  async asyncGetMovie() {
    const { id } = this.state;
    const movie = await movieAPI.getMovie(id);
    this.setState(() => { ...movie });

  }
  // -----------------------------------------------

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
