import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
  constructor() {
    super();
    this.setState = {
      movie: {},
      itsLoading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getMovieData(id);
  }

  getMovieData = async (id) => {
    const returnApi = await movieAPI.getMovie(id);
    this.setState({
      movie: returnApi,
      itsLoading: false,
    });
  }

  render() {
    const { movie, itsLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (itsLoading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape(PropTypes.object).isRequired,
};
