import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Movie extends Component {
  constructor() {
    super();
    this.deleteCard = this.deleteCard.bind(this);
  }

  deleteCard() {
    const { deleteMovieCard, movie } = this.props;
    const { id } = movie;
    deleteMovieCard(id);
  }

  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const details = `${id}/edit`;

    return (
      <div className="movieDetails">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="infoMovieDetails">
          <h1>{ `Title: ${title}` }</h1>
          <h2>{ `Subtitle: ${subtitle}` }</h2>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div className="navMovieDetails">
          <Link className="button" to="/"> VOLTAR </Link>
          <Link className="button" to={ details }> EDITAR </Link>
          <Link className="button" to="/" onClick={ this.deleteCard }>DELETAR</Link>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
    subtitle: PropTypes.string,
    id: PropTypes.number,
  }),
  deleteMovieCard: PropTypes.func,
};

Movie.defaultProps = {
  movie: {},
  deleteMovieCard: undefined,
};
