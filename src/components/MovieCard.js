import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <p>{ genre }</p>
        <p>{ rating }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};
