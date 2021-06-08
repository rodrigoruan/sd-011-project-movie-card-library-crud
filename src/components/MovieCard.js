import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <BrowserRouter>
        <div className="movie-card-wrapper" data-testid="movie-card">
          { [movie].map(({ id, title, storyline }) => (
            <div className="movie-card-body" key={ id }>
              <div className="movie-card-title">
                { title }
              </div>
              <div className="movie-card-storyline">
                { storyline }
              </div>
              <div className="movie-card-details">
                <Link to={ `/movies/${id}` }>VER DETALHES</Link>
              </div>
            </div>
          )) }
        </div>
      </BrowserRouter>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
