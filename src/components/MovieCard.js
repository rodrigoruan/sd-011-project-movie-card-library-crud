import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const redirectLink = `/movies/${movie.id}`;
    return (
      <div data-testid="movie-card" id={ movie.id }>
        <h2>{ movie.title }</h2>
        <p>{ movie.storyline }</p>
        <Link to={ redirectLink }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.isRequired,
};

export default MovieCard;
