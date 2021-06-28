import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        {/* <img alt="Movie Cover" className="movie-card-image" src={ imagePath } /> */}
        <h4 className="movie-card-title">{title}</h4>
        {/* <h5 className="movie-card-subtitle">{subtitle}</h5> */}
        <p className="movie-card-storyline">{storyline}</p>
        <Link to={ { pathname: `movies/${movie.id}` } }>
          VER DETALHES
        </Link>
        <br />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
