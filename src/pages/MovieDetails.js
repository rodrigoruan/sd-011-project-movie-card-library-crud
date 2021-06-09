import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor({ match }) {
    super();
    const { params: { id } } = match;
    this.state = {
      idMv: id,
      info: {},
    };
    this.getInfoMovie = this.getInfoMovie.bind(this);
    this.infosLoad = this.infosLoad.bind(this);
  }

  componentDidMount() {
    this.getInfoMovie();
  }

  getInfoMovie() {
    const { idMv } = this.state;
    movieAPI.getMovie(idMv).then((result) => this.setState({
      info: result,
    }));
  }

  infosLoad() {
    const {
      idMv,
      info: { title, storyline, imagePath, genre, rating, subtitle },
    } = this.state;
    return (
      <>
        <p>{ `Title: ${title}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${idMv}/edit` }>EDITAR</Link>
      </>
    );
  }

  render() {
    const { info: { title } } = this.state;
    return (
      <div data-testid="movie-details">
        {title === undefined ? <Loading /> : this.infosLoad() }
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
