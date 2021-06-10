import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      storyline: '',
      imagePath: '',
      genre: '',
      rating: 0,
      subtitle: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleDeleteMovie() {
    console.log('ok');
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { isLoading: true },
      async () => {
        const movie = await movieAPI.getMovie(id);
        const { title, storyline, imagePath, genre, rating, subtitle } = movie;
        this.setState({
          title,
          imagePath,
          storyline,
          genre,
          rating,
          subtitle,
          isLoading: false,
        });
      },
    );
  }

  render() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      isLoading } = this.state;
    if (isLoading) {
      return (<Loading />);
    }
    return (
      <div data-testid="movie-details">
        <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h1>{ `Title: ${title}` }</h1>
          <h4>{ `Subtitle: ${subtitle}` }</h4>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </div>
        <div>
          <Link to="/">VOLTAR</Link>
        </div>
        <div>
          <Link to="/" onClick={ this.handleDeleteMovie }>DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
