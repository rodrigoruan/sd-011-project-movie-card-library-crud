import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieById = this.getMovieById.bind(this);
  }

  componentDidMount() {
    this.getMovieById();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
  }

  async getMovieById() {
    const { match: { params: { id } } } = this.props;
    const movieById = await movieAPI.getMovie(id);
    this.setState({
      movie: movieById,
      loading: false,
    });
  }

  render() {
    const { loading, movie } = this.state;

    if (loading) {
      return (<Loading />);
    }

    return (
      <div data-testid="edit-movie" className="columns">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
