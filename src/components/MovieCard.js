import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, id } } = this.props;
    return (
      <div data-testid="movie-card">
        Movie Card
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <img src={ imagePath } alt="Movie Banner" />
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>

    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape(PropTypes.object).isRequired,
};
