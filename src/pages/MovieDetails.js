import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movieDetails: [],
      inAwait: true,
    };

    this.getMovie = this.getMovie.bind(this);
    this.delMovie = this.delMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const search = await getMovie(id);
    this.setState({ movieDetails: search, inAwait: false });
  }

  async delMovie() {
    const { match: { params: { id } } } = this.props;
    const { deleteMovie } = movieAPI;
    const search = await deleteMovie(id);
    this.setState({ movieDetails: search, inAwait: true });
  }

  render() {
    const { movieDetails, inAwait } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movieDetails;
    if (inAwait) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.delMovie }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
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
