import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

// REQ.03 Todos os MovieCards devem possuir em seu conteúdo, pelo menos, o título, a sinopse e um link com o texto "VER DETALHES" que aponta para a rota movies/:id, onde :id é o id do filme. Esta rota exibirá informações detalhadas de um filme.
class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <h3>{ title }</h3>
        <p>{ storyline }</p>
        <img alt="Movie Cover" src={ imagePath } />
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    id: propTypes.number,
  }).isRequired,
};

export default MovieCard;
