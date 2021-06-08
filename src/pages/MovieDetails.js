import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import Movie from '../components/Movie';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };

    this.fetchMovie = this.fetchMovie.bind(this);
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

  render() {
    const { movie, loading } = this.state;
    const loadingElement = <Loading />;

    return (
      <div data-testid="movie-details">
        { loading ? loadingElement : <Movie movie={ movie } /> }
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

MovieDetails.defaultProps = {
  match: {},
};
