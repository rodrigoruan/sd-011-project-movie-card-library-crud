import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleSubmit(newMovie) {
    const { createMovie } = movieAPI;

    createMovie(newMovie);
    this.setState(() => ({
      shouldRedirect: true,
    }));
  }

  renderForm() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }

  render() {
    const { shouldRedirect } = this.state;

    return (shouldRedirect ? <Redirect to="/" /> : this.renderForm());
  }
}
export default NewMovie;
