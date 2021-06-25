import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fetchEdit = this.fetchEdit.bind(this);
  }

  componentDidMount() {
    this.fetchEdit();
  }

  handleSubmit(updatedMovie) {
    this.setState({
      shouldRedirect: true,
    });
    movieAPI.updateMovie(updatedMovie);
  }

  async fetchEdit() {
    const { match: { params: { id } } } = this.props;
    const req = await movieAPI.getMovie(id);
    this.setState({
      status: false,
      movie: req,
    });
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

EditMovie.propTypes = ({
  match: PropTypes.arrayOf,
}).isRequired;

export default EditMovie;
