import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from '../components/Movie';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovieCard = this.deleteMovieCard.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
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

  async deleteMovieCard(idMovie) {
    await movieAPI.deleteMovie(idMovie);
  }

  render() {
    const { movie, loading } = this.state;
    const loadingElement = <Loading />;

    return (
      <div className="container" data-testid="movie-details">
        { loading ? loadingElement : <Movie
          movie={ movie }
          deleteMovieCard={ this.deleteMovieCard }
        /> }
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

MovieDetails.defaultProps = {
  match: {},
};
