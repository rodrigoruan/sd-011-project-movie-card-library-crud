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

    this.fetchMovie = this.fetchMovie.bind(this);
    this.onClickDeleteMovie = this.onClickDeleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  onClickDeleteMovie() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id);
    this.setState({
      loading: false,
    });
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props; // passagem de props pelo componente Route
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
      loading: false,
    });
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading === true) {
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
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.onClickDeleteMovie }>DELETAR</Link>
      </div>
    );
  }
  // referencia: https://stackoverflow.com/questions/42800815/how-to-use-onclick-event-on-react-link-component
}

MovieDetails.propTypes = {
  match: PropTypes.string,
  params: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
