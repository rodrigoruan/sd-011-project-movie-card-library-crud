import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath, genre, rating, subtitle } } = this.props;
    return (
      <div data-testid="movie-card">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <img src={ imagePath } alt="imagens dos filmes" />
        <p>{storyline}</p>
        <p>{genre}</p>
        <span>{rating}</span>
      </div>
    );
  }
}

export default MovieCard;
