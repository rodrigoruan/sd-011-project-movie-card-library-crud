import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.renderMovieDetails = this.renderMovieDetails.bind(this);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.renderMovieDetails();
  }

  deleteMovieFromList = async () => {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
  }

  async renderMovieDetails() {
    const { match: { params: { id } } } = this.props;
    const movieDetailAPI = await movieAPI.getMovie(id);

    this.setState({
      id,
      loading: false,
      movie: movieDetailAPI,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading, id } = this.state;
    const loadingMovieDetail = <span><Loading /></span>;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading) {
      return loadingMovieDetail;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ title }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>
          EDITAR
        </Link>
        <Link to="/">
          VOLTAR
        </Link>
        <Link to="/" onClick={ this.deleteMovieFromList }>
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
};

export default MovieDetails;
