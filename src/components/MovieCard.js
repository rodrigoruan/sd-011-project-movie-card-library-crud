import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, id, storyline, rating, imagePath } = movie;

    return (
      <li data-testid="movie-card">
        <img src={ imagePath } alt={ `Cover for ${title}` } />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <small>{rating}</small>
        <p>{storyline}</p>
        <p><Link to={ `/movies/${id}` }>VER DETALHES</Link></p>
      </li>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
};
