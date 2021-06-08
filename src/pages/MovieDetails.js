import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
      loading: true,
    };

    this.deleteFilm = this.deleteFilm.bind(this);
    this.settingState = this.settingState.bind(this);
  }

  async componentDidMount() {
    const { params } = this.props;
    const { id } = params;
    const response = await movieAPI.getMovie(id);
    this.settingState(response);
  }

  settingState(response) {
    this.setState({ movie: response, loading: false });
  }

  async deleteFilm() {
    const { params } = this.props;
    const { id } = params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (loading) return <Loading />;
    return (
      <div>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <Link to={ `/movies/${id}/edit` } params={ id }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link onClick={ () => this.deleteFilm(id) } to="/">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  params: PropTypes.objectOf({ id: PropTypes.number }).isRequired,
};

export default MovieDetails;
