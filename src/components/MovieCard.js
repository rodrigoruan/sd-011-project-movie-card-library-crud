import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath, id } } = this.props;

    return (
      <div data-testid="movie-card" className="mapped-movie">
        <img className="img-movie" src={ imagePath } alt="imagens dos filmes" />
        <h3>{title}</h3>
        <p>{storyline}</p>
        <p><Link to={ `/movies/${id}` }>VER DETALHES</Link></p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
