import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Button from '../components/Button';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      shouldRedirect: false,
      movie: {
        title: '',
        storyline: '',
        imagePath: '',
        genre: '',
        rating: 0,
        subtitle: '',
      },
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }

  async componentDidMount() {
    await this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { params: { id } } = match;
    const movie = await movieAPI.getMovie(id);

    this.setState({
      movie,
      isLoading: false,
    });
  }

  async removeHandler() {
    const { match } = this.props;
    const { params: { id } } = match;
    movieAPI.deleteMovie(id);

    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { match } = this.props;
    const { params: { id } } = match;
    const { isLoading, shouldRedirect } = this.state;
    const { movie: {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Button path={ `/movies/${id}/edit` } text="EDITAR" />
        <Button path="/" text="VOLTAR" />
        <Button path="/" text="DELETAR" onClick={ this.removeHandler } />
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
