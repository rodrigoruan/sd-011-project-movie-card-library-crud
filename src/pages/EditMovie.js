import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true
    })
  }
  
  async getMovieDetails() {
    const movieGot = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      movie: movieGot,
      status: 'loaded'
      })
  }
  
  componentDidMount() {
    this.getMovieDetails();
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />
    }
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  } 
}

export default EditMovie;
