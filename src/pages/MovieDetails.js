import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;

    const movie = await movieAPI.getMovie(parseInt(id, 10));

    this.setState({
      loading: false,
      movie,
    });
  }

  render() {
    const {
      loading,
      movie: { storyline, imagePath, genre, rating, subtitle, title, id },
    } = this.state;

    return (
      <div data-testid="movie-details">
        {
          loading
            ? <Loading />
            : (
              <section>
                <img alt="Movie Cover" src={ `../${imagePath}` } />
                <span>{ title }</span>
                <p>{ `Subtitle: ${subtitle}` }</p>
                <p>{ `Storyline: ${storyline}` }</p>
                <p>{ `Genre: ${genre}` }</p>
                <p>{ `Rating: ${rating}` }</p>
                <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
                <Link to="/">VOLTAR</Link>
              </section>
            )
        }
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
