import React from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shouldRedirect: false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Cria um novo filme, invoca a função createMovie da API r seta o shouldRedirect verdadeiro para a home.
  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.props;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default NewMovie;
