import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
    } = movie;

    return (
      <div
        data-testid="movie-card"
      >
        <img
          alt="Movie Cover"
          src={ imagePath }
        />
        <div>
          <h4
            data-testid="movie-card-title"
          >
            {title}
          </h4>
          <h5>
            {subtitle}
          </h5>
          <p>
            {storyline}
          </p>
        </div>
        <h5>{ rating }</h5>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
