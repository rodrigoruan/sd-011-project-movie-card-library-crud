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
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to="/"> VOLTAR </Link>
          <Link to={ details }> EDITAR </Link>
          <Link to="/" onClick={ this.deleteCard }>DELETAR</Link>
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
