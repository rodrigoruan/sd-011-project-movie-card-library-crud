import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const requestMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: requestMovie,
      loading: false,
    });
  }

  render() {
    const { movie: { id, title, storyline, imagePath,
      genre, rating, subtitle }, loading } = this.state;

    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        { title }
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>
          <button type="button">EDITAR</button>
        </Link>
        <br />
        <Link to="/">
          <button type="button">VOLTAR</button>
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.number),
    id: PropTypes.number,
  }).isRequired,
};

export default MovieDetails;
