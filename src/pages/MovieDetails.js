import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      load: true,
    };
  }

  getMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const movieList = await movieAPI.getMovie(id);
    this.setState({
      movie: movieList,
      load: false,
    });
  }

  componentDidMount = () => {
    this.getMovie();
  }

  deleteMovie = (movieId) => {
    movieAPI.deleteMovie(movieId);
  }

  render() {
    const { movie } = this.state;
    const { id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = movie;
    const { load } = this.state;
    return (
      <div data-testid="movie-details">
        {load ? <Loading /> : (
          <div>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <h1>{ title }</h1>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
            <Link
              to="/"
              onClick={ () => {
                this.deleteMovie(id);
              } }
            >
              DELETAR
            </Link>
          </div>)}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape().isRequired,
};
