import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <h3>{ title }</h3>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }> VER DETALHES </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.number,
    imagePath: propTypes.string,
    bookmarked: propTypes.bool,
    genre: propTypes.string,
  }).isRequired,
};

export default MovieCard;
