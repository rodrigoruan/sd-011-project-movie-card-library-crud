import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagepath, title, subtitle, genre, storyline, id } = movie;
    return (
      <div>
        <img alt="Movie Cover" src={ imagepath } />
        <div data-testid="movie-card">
          <h3>{ title }</h3>
          <h4>{ subtitle }</h4>
          <h5>{ genre }</h5>
          <p>{ storyline }</p>
          <Link to={ `movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf({
    imagepath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    genre: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
