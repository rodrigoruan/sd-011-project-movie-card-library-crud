import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <br />
        <div className="movie-card-body">
          <div className="img-container">
            <img alt="logo" src={ imagePath } className="movie-card-image" />
          </div>
          <div className="movie-card-title">
            <h1>{ title }</h1>
          </div>
          <div className="movie-card-subtitle">
            <h5>{ storyline }</h5>
          </div>
        </div>
        <Link to={ `/movies/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};
