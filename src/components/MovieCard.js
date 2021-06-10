import React from 'react';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;
    return (
      <div data-testid="movie-card">
        <div>
          <img src={ imagePath } alt={ title } />
          <span>{ title }</span>
        </div>
        <div>
          <p>{ storyline }</p>
        </div>
        <Link to={ `/movies/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = ({
  id: propTypes.number,
}).isRequired;
