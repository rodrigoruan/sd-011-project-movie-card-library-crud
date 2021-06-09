import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
    };
    this.importMovieFromApi = this.importMovieFromApi.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    this.importMovieFromApi();
  }

  async importMovieFromApi() {
    const { match: { params: { id } } } = this.props;
    const movieData = await movieAPI.getMovie(id);
    this.setState({
      movie: movieData,
    });
  }

  async removeMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  movieDetails() {
    const { movie: {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle } } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ title }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link onClick={ () => this.removeMovie(id) } to="/">DELETAR</Link>
      </div>
    );
  }

  render() {
    const { movie } = this.state;

    return (
      movie ? this.movieDetails() : <Loading />
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
