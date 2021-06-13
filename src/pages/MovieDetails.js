import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.fetchMovie(id);
  }

  async handleDelete() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  async fetchMovie(id) {
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie: {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
    } } = this.state;

    const { loading } = this.state;
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
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.handleDelete }> DELETAR</Link>
        <Link to="/"> VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf({}),
    id: PropTypes.number,
  }).isRequired,
};

export default MovieDetails;
