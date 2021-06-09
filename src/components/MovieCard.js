import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, id, rating } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="Movie Cover" />
        <div>
          <h3>{ title }</h3>
          <h4>{ subtitle }</h4>
          <p>{ storyline }</p>
        </div>
        <div>
          <span>{ rating }</span>
        </div>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
