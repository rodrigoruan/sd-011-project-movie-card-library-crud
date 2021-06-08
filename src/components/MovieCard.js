import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;

    return (
      <>
        <div data-testid="movie-card">
          Movie Card
        </div>
        <h1>{ title }</h1>
        <img src={ imagePath } alt="Renderizar a imagem" />
        <h2>{ storyline }</h2>
        <Link to={ `/movies/${id}` }> VER DETALHES</Link>
      </>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
