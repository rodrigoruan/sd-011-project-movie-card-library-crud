import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <img src={ imagePath } alt={ title } />
        <h3>{ subtitle }</h3>
        <p>
          { storyline }
        </p>
        <span>{ rating }</span>
        <Link to={ `movies/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
