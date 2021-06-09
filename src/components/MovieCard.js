import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    const pathName = `/movies/${id}`;

    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
        <p>{ storyline }</p>
        <Link to={ pathName }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      storyLine: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};
