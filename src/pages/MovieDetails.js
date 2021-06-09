import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: [],
    };

    this.loadMovie = this.loadMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.loadMovie();
  }

  deleteMovie(id) {
    movieAPI.deleteMovie(id);
  }

  async loadMovie() {
    const { match: { params: { id } } } = this.props;
    const detailedMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: detailedMovie, loading: false,
    });
  }

  render() {
    const { loading, movie } = this.state;
    const { match: { params: { id } } } = this.props;

    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <p>{ `Title: ${title}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link onClick={ () => this.deleteMovie(id) } to="/">DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf(
    PropTypes.object,
  ).isRequired,
};
