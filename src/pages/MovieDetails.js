import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: null,
    };

    this.setMovie = this.setMovie.bind(this);
  }

  componentDidMount() {
    this.setMovie();
  }

  async setMovie() {
    const { match: { params: id } } = this.props;
    const oneMovie = await movieAPI.getMovie(id.id);
    this.setState({
      movie: oneMovie,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;

    // Render Loading here if the request is still happening
    if (!movie) {
      return <Loading />;
    }

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match: { params: id } } = this.props;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <button type="button" onClick={ () => movieAPI.deleteMovie(id.id) }>
          <Link to="/">
            DELETAR
          </Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }) }).isRequired,
};

export default MovieDetails;
