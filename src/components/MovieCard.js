import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div data-testid="movie-card">
        Movie Card
      </div>

    );
  }
}
MovieCard.propTypes = {
  movies: PropTypes.shape(PropTypes.object).isRequired,
};
