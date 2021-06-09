import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'normal',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidUpdate() {
    const { status } = this.state;
    if (status === 'created') {
      return <Redirect to="/" />;
    }
  }

  async handleSubmit(newMovie) {
    this.setState({ loading: 'loading' });
    await movieAPI.createMovie({ ...newMovie });
    await this.setState({ loading: 'created' });
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="new-movie">
        { loading ? <Loading /> : <MovieForm onSubmit={ this.handleSubmit } /> }
      </div>
    );
  }
}
export default NewMovie;
