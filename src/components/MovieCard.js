import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card" className="movie-card movie-card-body">
        <h3 className="movie-card-title">{ title }</h3>
        <p className="movie-card-storyline">{ storyline }</p>
        <Link to={ `/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    imagePath: 'Image undefined',
    title: 'Title undefined',
    storyline: 'Storyline undefined',
  }),
};

export default MovieCard;
