import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

export default class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    this.setState({
      shouldRedirect: true,
    }, () => {
      movieAPI.updateMovie(updatedMovie);
    });
  }

  getMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const movieList = await movieAPI.getMovie(id);
    this.setState({
      movie: movieList,
      status: '',
    });
  }

  componentDidMount = () => {
    this.getMovie();
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      return <Redirect />;
    }
    if (status === 'loading') {
      return (
        <div data-testid="edit-movie">
          <Loading />
        </div>
      );
    }
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape().isRequired,
};
