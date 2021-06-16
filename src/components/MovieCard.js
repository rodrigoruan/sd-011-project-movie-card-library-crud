import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <li data-testid="movie-card">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <p>{ genre }</p>
        <p>{ rating }</p>
        <Link to="/movies/:id">VER DETALHES</Link>
      </li>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
};
