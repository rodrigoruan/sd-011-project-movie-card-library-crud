import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    // Retirei do codigo do Hugo Sommers daqui: https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/45/files
    this.state = {
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    // Retirei do codigo do Hugo Sommers daqui: https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/45/files
    this.setState(() => {
      movieAPI.createMovie(newMovie).then(() => this.setState({
        shouldRedirect: true,
      }));
    });
  }

  render() {
    // Retirei do codigo do Hugo Sommers daqui: https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/45/files
    const { shouldRedirect } = this.state;
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
