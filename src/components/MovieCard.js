import React from 'react';
import PropTypes from 'prop-types';
import Star from './Stars';
import { Button } from '@material-ui/core';

export default class MovieCard extends React.Component {
  render() {
    const {
      movie: { id, imagePath, rating, storyline, subtitle, title },
    } = this.props;

    return (
      <div data-testid="movie-card" className="card movie-card">
        <img src={imagePath} className="card-img-top" alt="" />
        <div className="card-header text-center">
          <Star value={rating} />
        </div>

        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text text-center">{subtitle}</p>
          <p className="card-text">{storyline}</p>
        </div>
        <div className="card-footer">
          <Button
            className="card-link"
            variant="contained"
            color="primary"
            size="large"
            href={`/movies/${id}`}
          >
            See more
          </Button>
        </div>
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
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};
