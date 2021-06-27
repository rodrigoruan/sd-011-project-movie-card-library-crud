// Requisito resolvido com consultas ao sites abaixo
// e aos projetos Movie Card Library e Stateful:
// https://www.youtube.com/watch?v=6ZVUCiriOZ4
// https://www.youtube.com/watch?v=Vu_bTKMSpbA

import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    storyline: propTypes.string,
    id: propTypes.number,
  }).isRequired,
};

// MovieCard.defaultProps = {
//   title: '',
//   storyline: '',
//   id: '',
// };

export default MovieCard;
