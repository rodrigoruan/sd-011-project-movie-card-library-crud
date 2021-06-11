import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { storyline, id, title } } = this.props;
    return (
      <div data-testid="movie-card">
        <p>{ title }</p>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` } params={ id }> VER DETALHES </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    storyline: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
