import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movieId: '',
    };
    this.removeMovie = this.removeMovie.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const requestedMovie = await movieAPI.getMovie(id);
    this.setLoadingFalse(requestedMovie);
  }

  setLoadingFalse(param) {
    this.setState({
      loading: false,
      movieId: param,
    });
  }

  async removeMovie() {
    const { match } = this.props;
    const { id } = match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movieId } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movieId;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Title: ${title}` }</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
          </div>)}
        <Link to={ `/movies/${id}/edit` } params={ id }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.removeMovie }>DELETAR</Link>
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
