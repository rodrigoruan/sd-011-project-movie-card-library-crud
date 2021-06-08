import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading } from '../components';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movieId: props.match.params,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setMovie = this.setMovie.bind(this);
  }

  async componentDidMount() {
    const { movieId } = this.state;
    const { getMovie } = movieAPI;
    const data = await getMovie(movieId.id);

    this.setMovie(data);
  }

  setMovie(data) {
    this.setState(() => ({
      status: '',
      movie: data,
    }))
  }

  handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    updateMovie(updatedMovie);
    this.setState(() => ({
      shouldRedirect: true,
    }))
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
      return (<Loading />);
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
