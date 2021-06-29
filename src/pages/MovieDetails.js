import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
      shouldRedirect: false,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie,
    });
  }

  deleteMovie(event) {
    event.preventDefault();
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { movie, loading, shouldRedirect } = this.state;
    if (loading) return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details" className="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="btn-cont">
          <Link to={ `/movies/${id}/edit` }>
            EDITAR
          </Link>
          <Link to="/">
            VOLTAR
          </Link>
          <Link
            to="/"
            onClick={ this.deleteMovie }
          >
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  storyline: propTypes.string,
  genre: propTypes.string,
  rating: propTypes.number,
  id: propTypes.number,
}.isRequired;
