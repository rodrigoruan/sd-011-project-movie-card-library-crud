import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import propTypes from 'prop-types';
import { id } from 'common-tags';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovie(id);
  }

  async fetchMovie(id) {
    const request = await movieAPI.getMovie(id);
    this.setState({
      movie: request,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (loading === true) {
      return (
        <Loading />
      );
    }
    return (
      <div data-testid="movie-details">
        <Link to="/">
          VOLTAR
        </Link>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{ `Title: ${title}` }</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>
          EDITAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.shape(propTypes.object).isRequired,
};

export default MovieDetails;
