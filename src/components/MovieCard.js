import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
  const { movie } = this.props;
  const { id, imagePath, title, subtitle, storyline, rating } = movie;
    return (
      <div data-testid="movie-card">
        <div>
          <img src={ imagePath } alt="image" />
          <h2>{ title }</h2>
          <h4>{ subtitle }</h4>
          <h4>{ storyline }</h4>
          <h5>{ rating }</h5>
        </div>
        <nav>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </nav>
      </div>
    );
  }
}

export default MovieCard;
