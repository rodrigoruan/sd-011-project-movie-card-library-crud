import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      load: true,
    };

    this.getMovieApi = this.getMovieApi.bind(this);
  }

  componentDidMount() {
    this.getMovieApi();
  }

  async getMovieApi() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const getMovie = await movieAPI.getMovie(id);
    this.setState({
      movies: getMovie,
      load: false,
      iden: id,
    });
  }

  render() {
    const { movies, load, iden } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;

    if (load) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${iden}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
