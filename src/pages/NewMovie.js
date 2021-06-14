import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; // Req. 6 usado na linha 21 para redirecionar o usuário para página inicial
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) { // Req. 6 função utilizada para criar o novo filme
    movieAPI.createMovie(newMovie).then(() => {
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return (<Redirect to="/" />);
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
