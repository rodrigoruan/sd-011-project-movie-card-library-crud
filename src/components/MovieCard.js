import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {title, subtitle, storyline, imagePath, rating} = movie;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <img src={ imagePath } />
        <h3>{ subtitle }</h3>
        <p>{ storyline } </p>
        <span>{ rating }</span>
      </div>
    );
  }
}

export default MovieCard;
