import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline } = movie;

    return (
      <div
        data-testid="movie-card"
        style={ { marginBottom: '20px', width: '250px' } }
      >
        <section style={ { fontWeight: '700' } }>{ title }</section>
        <section>{ storyline }</section>
        <section>
          <Link to={ `/movies/${id}` }>
            VER DETALHES
          </Link>
        </section>
      </div>
    );
  }
}

export default MovieCard;
