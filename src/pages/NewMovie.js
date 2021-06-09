import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from './components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      shoulRedirect: false,
    });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    this.setState({
      shoulRedirect: true,
    });
  }

  render() {
    const { shoulRedirect } = this.state;
    if (shoulRedirect) {
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
