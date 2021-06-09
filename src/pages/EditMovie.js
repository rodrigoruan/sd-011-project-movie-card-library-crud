import React from 'react';
import { Redirect } from 'react-router';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      shouldRedirect: false,
      movie: '',
      status: 'loading',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    const { pathname } = window.location;
    const id = pathname.match(/(?<=\/)\d+(?=\/)/);
    this.fetchMovie(id);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fetchMovie(id) {
    const response = await movieAPI.getMovie(id);
    this.setState({ movie: response, status: '' });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
