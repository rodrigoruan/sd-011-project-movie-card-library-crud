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
      id: props.match.params,
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.renderMovieDetails();
  }

  async renderMovieDetails() {
    const { id } = this.state;
    const idMovie = id.id;
    const movieDetailAPI = await movieAPI.getMovie(idMovie);

    this.setState({
      loading: false,
      movie: movieDetailAPI,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const { loading } = this.state;
    const loadingMovieDetail = <span><Loading /></span>;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

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
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
};
export default MovieDetails;
