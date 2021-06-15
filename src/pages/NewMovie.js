import React, { Component } from 'react';

import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';

import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: '',
        subtitle: '',
        storyline: '',
        imagePath: '',
        genre: 'thriller',
        rating: '',
      },
      shouldRedirect: false,
    };
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(movieToAdd) {
    await movieAPI.createMovie(movieToAdd);
    this.handleRedirect();
  }

  handleRedirect() {
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
