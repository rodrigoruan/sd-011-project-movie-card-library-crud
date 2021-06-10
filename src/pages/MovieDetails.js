import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
// Requisito 4 - Faça uma requisição para buscar o filme que deverá ser renderizado dentro de Movie Details.
class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.getTheMovie = this.getTheMovie.bind(this);
  }

  componentDidMount() {
    this.getTheMovie();
  }

  async getTheMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const response = await movieAPI.getMovie(id);
    this.setState({
      movies: response,
      loading: false,
    });
  }

  

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movies } = this.state;
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
    } = movies;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>

        <Link to={ `/movies/${id}/edit` }>EDITAR</Link><br />
        <Link to="/">VOLTAR</Link><br />
        <Link to="/movies/new">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf,
  params: PropTypes.objectOf,
  id: PropTypes.string,
};
MovieDetails.defaultProps = {
  match: {},
  params: {},
  id: '',
};

export default MovieDetails;
