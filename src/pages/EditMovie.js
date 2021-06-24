import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'loading',
      movie: [],
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  // captura o filme após o loading setando o status após loading
  // const { match: { param: { id } } } = this.props;
    const { match } = this.props;
    const { id } = match.params;

    movieAPI.getMovie(id)
      .then((movie) => {
        this.setState({
          status: 'loaded',
          movie,
        });
      });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      // from: https://reactrouter.com/web/api/Redirect
      return <Redirect to="/" />;
    }

    // renderiza loading de acordo com o status
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

EditMovie.propTypes = {
  match: PropTypes.object,
  params: PropTypes.shape({
    id: PropTypes.number,
  }),
}.isRequired;

export default EditMovie;
