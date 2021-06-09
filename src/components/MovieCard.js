import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './MovieCard.module.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, imagePath, storyline, title } } = this.props;

    return (
      <div data-testid="movie-card" className={ style.card }>
        <div className={ style.cardHeader }>
          <img src={ imagePath } alt={ title } />
          <span>{ title }</span>
        </div>
        <div className={ style.cardBody }>
          <p>{ storyline }</p>
        </div>
        <div className={ style.cardFooter }>
          <Link to={ `/movies/${id}` }>
            VER DETALHES
          </Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
