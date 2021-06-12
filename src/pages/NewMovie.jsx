import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      willRedirect: false,
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleSubmit(newMovie) {
    movieApi.createMovie(newMovie)
      .then(() => this.setState({shouldRedirect: true}))
      .catch((error) => console.error(error));
  }

  render() {
    const { willRedirect } = this.state;

    if (willRedirect) {
      return <Redirect to="/" />
    }
    
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
