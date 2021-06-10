import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.abobora = true;
    this.fetchAPI();
  }

  componentWillUnmount() {
    this.abobora = false;
  }

  fetchAPI() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id).then((movie) => {
      if (this.abobora) {
        this.setState({
          movie,
          loading: false,
        });
      } // NOT scape condition or early return
    });
  }

  async deleteMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const deleteMovies = await movieAPI.deleteMovie(id);
    this.setState({
      movie: deleteMovies,
      loading: false,
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

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
        <button type="button">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </button>
        <button type="button">
          <Link to="/">VOLTAR</Link>
        </button>
        <button type="button">
          <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
        </button>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};
