import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    // const { movie } = this.props;
    // const { title, storyline, imagePath, id } = movie;

    return (
      <div data-testid="movie-card">
        Movie Card
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
