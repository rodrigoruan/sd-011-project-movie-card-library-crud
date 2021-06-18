import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      status: 'loading',
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => this.setState(
      { movie, status: 'ready' },
    ));
  }

  deleteMovie(movieId) {
    movieAPI.deleteMovie(movieId);
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const {
      movie: { title, storyline, imagePath, genre, rating, subtitle },
      status,
    } = this.state;
    return (
      status === 'loading' ? <Loading />
        : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Title: ${title}` }</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to={ `/movies/${id}/edit` }>
              EDITAR
            </Link>
            <Link to="/">
              VOLTAR
            </Link>
            <Link to="/" onClick={ () => this.deleteMovie(id) }>
              DELETAR
            </Link>
          </div>
        )
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
