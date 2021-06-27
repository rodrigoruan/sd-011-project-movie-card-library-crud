import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.filmDetail = this.filmDetail.bind(this);
  }

  componentDidMount() {
    this.filmDetail();
  }

  handleSubmit(movie) {
    this.setState({ shouldRedirect: true });
    console.log(movie);
    movieAPI.updateMovie(movie);
  }

  async filmDetail() {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie, loading: false });
    console.log(movie);
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    // if (status === 'loading') {
    //   // render Loading
    // }

    if (loading) {
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
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;
