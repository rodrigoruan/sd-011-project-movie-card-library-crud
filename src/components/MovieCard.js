import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, storyline, id } } = this.props;
    return (
      <div className="card" data-testid="movie-card">
        <div className="card-header">
          <img src={ imagePath } alt={ title } />
          <h3>{ title }</h3>
        </div>
        <div className="card-body">
          <p>{storyline}</p>
        </div>
        <div className="card-footer">
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
