import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: {
      id,
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked,
      genre,
    } } = this.props;
    return (
      <div
        data-testid="movie-card"
        id={ id }
        bookmarked={ bookmarked }
        genre={ genre }
        className="movie"
      >
        <img src={ imagePath } alt={`Imagem do filme ${ title }`}/>
        <h3>{ title }</h3>
        <h4>{ subtitle }</h4>
        <p>{ storyline }</p>
        <p>{ rating }</p>
        <Link to={`movies/${ id }`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
};
export default MovieCard;
