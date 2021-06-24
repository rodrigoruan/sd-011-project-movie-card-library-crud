import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends React.Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    const { id } = match.params;

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: '',
      id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMoviesData = this.getMoviesData.bind(this);
  }

  componentDidMount() {
    this.getMoviesData();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async getMoviesData() {
    const { id } = this.state;
    const selectedMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: selectedMovie,
      status: '',
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

EditMovie.propTypes = {
  match: PropTypes.object,
  params: PropTypes.shape({
    id: PropTypes.number,
  }),
}.isRequired;

export default EditMovie;
