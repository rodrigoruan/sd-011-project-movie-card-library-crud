import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  render() {
    const { MovieInfos } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle } = MovieInfos;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/movie/:id/edit">EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  MovieInfos: PropTypes.array,
  title: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.string,
  subtitle: PropTypes.string,
}.isRequired;
