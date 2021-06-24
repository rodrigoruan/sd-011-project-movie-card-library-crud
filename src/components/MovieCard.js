import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id, genre } = movie;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={ imagePath } />
        <div>
          <h3>{ title }</h3>
          <h4>{ subtitle }</h4>
          <h4>{ storyline }</h4>
          <h4>{ genre }</h4>
          <h5>{ rating }</h5>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
