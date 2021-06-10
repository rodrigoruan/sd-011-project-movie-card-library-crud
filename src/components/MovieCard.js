import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    // Requisito 3 - Insira um link para a página de detalhes de um filme dentro de MovieCard
    const { movie: { id, title, subtitle, storyline, imagePath } } = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <h2>{ subtitle }</h2>
        <p>{ storyline }</p>
        <img src={ imagePath } alt="movies" />
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
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
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
