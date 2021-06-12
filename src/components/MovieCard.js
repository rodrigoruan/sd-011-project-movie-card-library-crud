import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={ imagePath } />
        <div>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
    storyline: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
