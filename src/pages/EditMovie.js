import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: null,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fecthApi = this.fecthApi.bind(this);
  }

  componentDidMount() {
    this.fecthApi();
  }

  handleSubmit(updatedMovie) {
    this.setState({
      status: 'succeful',
      shouldRedirect: true,
      movie: movieAPI.updateMovie(updatedMovie),
    });
  }

  async fecthApi() {
    const { match: { params: { id } } } = this.props;
    this.setState({
      shouldRedirect: false,
      status: 'loading',
      movie: await movieAPI.getMovie(id),
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect === false) {
      return (
        <div data-testid="edit-movie">
          <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        </div>
      );
    }
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        {status === 'loading' ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
      </div>
    );
  }
}

EditMovie.propTypes = {
  status: PropTypes.string,
  shouldRedirect: PropTypes.bool,
  movie: PropTypes.arrayOf(PropTypes.object),
  fecthApi: PropTypes.func,
  handleSubmit: PropTypes.func,
}.isRequired;

EditMovie.defaultProps = {
  movie: [{}],
  status: 'loading',
  shouldRedirect: null,
};

export default EditMovie;
