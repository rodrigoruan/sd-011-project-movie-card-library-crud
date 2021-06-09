import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading } from '../components';
import MovieForm from '../components/MovieForm';
import { createMovie, getMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      shouldRedirect: false,
      movie: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getMovie(id).then((movie) => {
      this.handleState(movie);
    });
  }

  handleState(movie) {
    this.setState({
      movie,
    });
  }

  handleSubmit(newMovie) {
    createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to='/' />
      )
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
