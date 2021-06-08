import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath } = movie;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="movie" />
        <h1>{ title }</h1>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
