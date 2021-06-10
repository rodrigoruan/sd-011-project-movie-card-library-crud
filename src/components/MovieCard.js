import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id, imagePath } } = this.props;
    return (
      <div data-testid="movie-card">
        <div>
          <img alt="movie-card" src={ imagePath } />
        </div>
        <section>
          <h2>{title}</h2>
          <p>{storyline}</p>
          <Link to={ `movies/${id}` }>VER DETALHES</Link>
        </section>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    storyline: PropTypes.string,
    title: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
