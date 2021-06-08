import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <div>{title}</div>
        <div>{storyline}</div>
        <div><Link to={ `movies/${id}` }>VER DETALHES</Link></div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieCard;
