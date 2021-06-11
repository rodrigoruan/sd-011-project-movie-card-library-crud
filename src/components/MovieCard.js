import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, rating, imagePath } = movie;

    return (
      <div className="movie-card-content">
        <div data-testid="movie-card" className="movie-card">
          <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
          <div>
            <h4 className="movie-card-title">{ title }</h4>
            <h5 className="movie-card-subtitle">{ subtitle }</h5>
            <p className="movie-card-storyline">{ storyline }</p>
          </div>
          <div className="movie-card-rating">
            <span className="rating">{ rating }</span>
          </div>
        </div>
        <div className="movie-details">
          <Link className="card-link" to={ `movies/${id}` }>VER DETALHES</Link>
        </div>
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
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
