import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };

    this.getMovieFetch = this.getMovieFetch.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getMovieFetch();
  }

  async getMovieFetch() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { getMovie } = movieAPI;
    const request = await getMovie(id);
    this.setState({
      movie: request,
      loading: false,
    });
  }

  async deleteMovie() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { deleteMovie } = movieAPI;
    const del = await deleteMovie(id);
    this.setState({ movie: del });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{`Title: ${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <ol>
              <li>
                <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              </li>
              <li>
                <Link to="/" onClick={ this.deleteMovie }>
                  DELETAR
                </Link>
              </li>
              <li>
                <Link to="/">VOLTAR</Link>
              </li>
            </ol>
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
