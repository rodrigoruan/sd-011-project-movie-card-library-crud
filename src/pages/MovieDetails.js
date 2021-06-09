import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      loading: true,
    };
    this.getMoviesFalseApi = this.getMoviesFalseApi.bind(this);
    this.deleteMovieByFalseApi = this.deleteMovieByFalseApi.bind(this);
  }

  componentDidMount() {
    this.getMoviesFalseApi();
  }

  async getMoviesFalseApi() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;
    const movies = await getMovie(id);

    this.setState({ movie: movies, loading: false });
  }

  deleteMovieByFalseApi() {
    const { match } = this.props;
    const { id } = match.params;
    const { deleteMovie } = movieAPI;

    deleteMovie(id);
  }

  render() {
    const { match } = this.props;
    const { movie, loading } = this.state;
    const { id } = match.params;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={ this.deleteMovieByFalseApi }>DELETAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.array).isRequired,
  id: PropTypes.string.isRequired,
};
