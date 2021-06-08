import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{ movie.title }</h1>
        <p>{ movie.storyline }</p>
        <Link to={ `/movies/${id}` } params={ id }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
