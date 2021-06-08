import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, rating, storyline, id } = movie;

    return (
      <div className="movieCard" data-testid="movie-card">
        <span className="boxShadowImage">
          <img src={ imagePath } alt="movie" />
        </span>
        <div className="movieCardContent">
          <h1>{ title }</h1>
          <div className="rating">{ rating }</div>
        </div>
        <div className="movieCardContent">
          <p>{ storyline }</p>
        </div>
        <div className="movieCardDetails">
          <Link className="link" to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: {
    imagePath: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }.isRequired,
};

export default MovieCard;
