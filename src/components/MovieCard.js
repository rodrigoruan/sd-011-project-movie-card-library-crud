import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    const details = `movies/${id}`;
    return (
      <div className="movieCard" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <h1 data-testid="movie-card-title" className="movie-card-title">{title}</h1>
        <div className="movie-card-body">
          <p className="movie-card-storyline">{storyline}</p>
          <Link className="button" to={ details }> VER DETALHES </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};
