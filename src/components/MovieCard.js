import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline } = movie;

    return (
      <div data-testid="movie-card">
        <section>{ title }</section>
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

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
