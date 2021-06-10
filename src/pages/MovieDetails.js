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
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.willUnmount = false;
    this.showMovie();
  }

  componentWillUnmount() { // resolvido warning 'Can't perform a React state update on an unmounted component' com ajuda de Inácio e Gabi Feijó
    this.willUnmount = true;
  }

  async showMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const movie = await movieAPI.getMovie(id);
    if (!this.willUnmount) {
      this.setState({
        movie,
      });
    }
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
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};

export default MovieDetails;
