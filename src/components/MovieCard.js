import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, id, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img
          className="movie-card-image"
          src={ imagePath }
          alt={ `Cover for ${title}` }
        />
        <h1 className="movie-card-title">{ title }</h1>
        <h2 className="movie-card-subtitle">{ subtitle }</h2>
        <small>{ rating }</small>
        <p className="movie-card-storyline">{ storyline }</p>
        <p>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
