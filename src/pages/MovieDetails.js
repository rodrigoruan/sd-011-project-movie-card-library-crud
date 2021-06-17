import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { id } from 'postcss-selector-parser';

import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.getIdFromMovie();
  }

  async getIdFromMovie() {
    const { match } = this.props;
    const { id } = match.params;

    const catchId = await movieAPI.getMovie(id);
    this.setState({
      movie: catchId,
      loading: false,
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div>
        {
          loading ? (
            <Loading />
          ) : (
            <div data-testid="movie-details">
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{`Title: ${title}`}</p>
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
              <Link
                to={ {
                  pathname: `/movies/${id}/edit`,
                  state: { params: { id } },
                } }
              >
                EDITAR
              </Link>
              <Link to="/">VOLTAR</Link>
            </div>)
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number,
    }),
  }).isRequired,
};
