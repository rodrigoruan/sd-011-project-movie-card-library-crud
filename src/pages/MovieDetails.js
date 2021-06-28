import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      load: true,
      movie: [],
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.myMovie();
  }

  async myMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const response = await movieAPI.getMovie(id);
    this.setState({
      load: false,
      movie: response,
    });
  }

  async deleteMovie() {
    const { match } = this.props;
    const { id } = match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, load } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return load ? <Loading /> : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number,
    }),
  }).isRequired,
};
