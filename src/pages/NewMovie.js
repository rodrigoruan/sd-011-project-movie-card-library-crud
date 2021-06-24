import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    // status: loading,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    // Acessa o módulo da API e seta o state para redirect
    movieAPI.createMovie(newMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    // redireciona pra page inicial
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    // if (status === loading) {
    //   return <Loading>;
    // }
    return (
      // retorna formulário
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
