import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath } } = this.props;

    return (
      <div data-testid="movie-card">
        <h4>{ title }</h4>
        <img src={ imagePath } alt={ `${title} cover art` } />
        <p>{ storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
