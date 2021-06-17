import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    this.fetchMovie(match.params.id);
  }

  async fetchMovie(id) {
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie });
  }

  render() {
    const { movie } = this.state;

    if (movie) {
      const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h3>{ title }</h3>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link
            to="/"
            onClick={ () => movieAPI.deleteMovie(id) }
          >
            DELETAR
          </Link>
          <Link to="/">VOLTAR</Link>
        </div>
      );
    }
    return <Loading />;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
