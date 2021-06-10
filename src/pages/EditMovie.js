import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.specificMovie = this.specificMovie.bind(this);
  }

  componentDidMount() {
    this.specificMovie();
  }

  handleSubmit(updatedMovie) {
    this.setState(() => {
      movieAPI.updateMovie(updatedMovie).then(() => this.setState({
        shouldRedirect: true,
      }));
    });
  }

  async specificMovie() {
    // https://pt.stackoverflow.com/questions/391641/como-passar-parametros-via-url-para-uma-aplica%C3%A7%C3%A3o-em-react
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const response = await movieAPI.getMovie(id);
    this.setState({ movie: response, status: 'NotLoading' });
  }

  // Retirei do codigo do Hugo Sommers daqui: https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/45/files
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

// Retirei do codigo do Hugo Sommers daqui: https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/45/files
EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
