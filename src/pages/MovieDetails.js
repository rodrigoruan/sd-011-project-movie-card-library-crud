import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      returnedDetails: {},
      loading: true,
    };
    this.requireMovieDetails = this.requireMovieDetails.bind(this);
  }

  componentDidMount() {
    this.requireMovieDetails();
  }

  async requireMovieDetails() {
    const { match: { params: { id } } } = this.props;
    const returnedDetails = await movieAPI.getMovie(id);
    this.setState({ returnedDetails, loading: false });
  }

  render() {
    const { returnedDetails, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = returnedDetails;
    if (loading === true) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{ `Title: ${title}` }</h3>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link
          to="/"
          onClick={ () => movieAPI.deleteMovie(id) }
        >
          DELETAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.number,
    }),
  }).isRequired,
};

// Source: consulta ao repositório https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/161/
