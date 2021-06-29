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
      loaded: true,
    };
    this.getAPI = this.getAPI.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getAPI();
  }

  async getAPI() {
    const { match } = this.props;
    const { id } = match.params;
    const getmovieAPI = await movieAPI.getMovie(id);
    this.setState({
      movie: getmovieAPI,
      loaded: false,
    });
  }

  async deleteMovie() {
    const { match } = this.props;
    const { id } = match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { loaded, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (

      loaded ? <Loading /> : (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      )
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
