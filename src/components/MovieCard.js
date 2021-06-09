import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating,
      imagePath, bookmarked, genre, id } } = this.props;

    return (
      <div data-testid="movie-card">
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <h5 className="movie-card-rating">{ rating }</h5>
        <h5 className="movie-card-bookmarked">{ bookmarked }</h5>
        <h5 className="movie-card-genre">{ genre }</h5>
        <img className="movie-card-image" src={ imagePath } alt="Folder Film" />
        <nav>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </nav>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    bookmarked: PropTypes.string,
    genre: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
