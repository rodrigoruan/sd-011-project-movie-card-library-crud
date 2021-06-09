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

    this.setState = this.setState.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    const movie = this.props;
    const { id } = movie.match.params;
    this.showMovie(id);
  }

  async showMovie(currentId) {
    const movieToShow = await movieAPI.getMovie(currentId);
    this.setState({
      movie: movieToShow,
    });
  }

  deleteMovie() {
    const { movie } = this.state;
    const { id } = movie;
    movieAPI.deleteMovie(id);
  }

  renderMovie() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div className="movie-card-details" data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="link">
          <Link className="link-detail" to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link className="link-detail" to="/">VOLTAR</Link>
          <Link className="link-detail" to="/" onClick={ this.deleteMovie }>DELETAR</Link>
        </div>
      </div>
    );
  }

  render() {
    const { movie } = this.state;
    return (
      movie ? this.renderMovie() : <Loading />
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
