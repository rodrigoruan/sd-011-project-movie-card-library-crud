import React from 'react';

class MovieCard extends React.Component {
  render() {

    const { movies: { title, subtitle, storyline, rating,
      imagePath, bookmarked, genre } } = this.props;

    return (
      <div data-testid="movie-card">
        
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <img className="movie-card-image" src={ imagePath } alt="Folder Film" />
      </div>
    );
  }
}

export default MovieCard;
