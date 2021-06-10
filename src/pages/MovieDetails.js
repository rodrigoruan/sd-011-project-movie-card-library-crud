import React, { Component } from 'react';
import './MovieDetails.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.requestMovie();
  }

  async requestMovie() {
    const { match: { params: { id } } } = this.props;

    this.setState(
      { isLoading: true },
      async () => {
        await movieAPI.getMovie(id)
          .then((response) => {
            this.setState({
              movie: response,
              isLoading: false,
            });
          });
      },
    );
  }

  async removeMovie(movieId) {
    await movieAPI.deleteMovie(movieId);
  }

  render() {
    const {
      movie: {
        id, title, storyline, imagePath, genre, rating, subtitle,
      },
    } = this.state;

    const { isLoading } = this.state;

    if (isLoading) {
      return <Loading />;
    }
    return (
      <div className="movie-card-details-content">
        <div className="movie-card" data-testid="movie-details">
          <img className="movie-card-image" alt="Movie Cover" src={ `../${imagePath}` } />
          <p className="movie-card-title">{ `Title: ${title}` }</p>
          <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
          <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <div className="movie-details-navegation">
            <Link className="home-btn" to="/">VOLTAR</Link>
            <Link
              className="edit-movie-btn"
              to={ `/movies/${id}/edit` }
            >
              EDITAR
            </Link>
            <Link
              className="remove-movie-btn"
              to="/"
              onClick={ () => this.removeMovie(id) }
            >
              DELETAR
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
