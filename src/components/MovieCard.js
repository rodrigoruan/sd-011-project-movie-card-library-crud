import React from 'react';
import PropType from 'prop-types';
import { Link }from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie:{ title, storyline, imagePath, id }} = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <img src={ imagePath } alt={title}/>
        <Link to={`/movie/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.PropType = {
  movie: PropType.shape({
    title: PropType.string,
    storyline: PropType.string,
    id: PropType.number,
    imagePath: PropType.string,
  }).isRequired,
};

export default MovieCard;
