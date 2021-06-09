import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;
    const pathName = `/movies/${id}`;
    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
        <p>{ storyline }</p>
        <Link to={ pathName } >VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
