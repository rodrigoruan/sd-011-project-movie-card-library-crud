import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { id, title, subtitle, storyline },
    } = this.props;
    return (
      <div data-testid="movie-card">
        <h5>{ title }</h5>
        <h6>{ subtitle }</h6>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
