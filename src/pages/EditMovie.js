import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovieEdit = this.fetchMovieEdit.bind(this);
  }

  componentDidMount() {
    this.fetchMovieEdit();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async fetchMovieEdit() {
    this.setState(
      { loading: true },
      async () => {
        const { match } = this.props;
        const { params } = match;
        const { id } = params;
        const requestObject = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: requestObject,
        });
      },
    );
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    const loadingElement = <Loading />;

    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div data-testid="edit-movie">
        { loading ? loadingElement : <MovieForm
          movie={ movie }
          onSubmit={ this.handleSubmit }
        /> }
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

EditMovie.defaultProps = {
  match: {},
};
