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
      movie: {},
    };

    this.removerMovie = this.removerMovie.bind(this);
  }

  componentDidMount() {
    this.mountMovies();
  }

  async mountMovies() {
    const { match } = this.props; // https://stackoverflow.com/questions/54463073/react-router-match-with-params
    const { id } = match.params;
    const request = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie: request,
    });
  }

  async removerMovie() {
    const { match } = this.props; // https://stackoverflow.com/questions/54463073/react-router-match-with-params
    const { id } = match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return loading ? <Loading /> : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `Title: ${title}` }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` } param={ id }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.removerMovie }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
