import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      loading: true,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const { match: { params: { id } } } = this.props;
    const moviesList = await movieAPI.getMovie(id);
    this.setState({
      movie: moviesList,
      loading: false,
    });
  }

  deleteMovie() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie } = this.state;
    const { loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        { loading ? <Loading />
          : (
            <div>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <h1>{ title }</h1>
              <h2>{ `Subtitle: ${subtitle}` }</h2>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <span>
                <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
                <Link to="/"> VOLTAR </Link>
                <Link to="/" type="button" onClick={ this.deleteMovie }>
                  DELETAR
                </Link>
              </span>
            </div>
          )}
      </div>
    );
  }
}
MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape().isRequired,
};

export default MovieDetails;
