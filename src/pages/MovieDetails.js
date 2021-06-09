import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.requestMovie();
  }

  async requestMovie() {
    const { match: { params: { id } } } = this.props;

    this.setState(
      { isLoading: true },
      async () => {
        await movieAPI.getMovie(id).then((response) => {
          this.setState({
            movie: response,
            isLoading: false,
          });
        });
      },
    );
  }

  render() {
    const {
      movie: {
        id, title, storyline, imagePath, genre, rating, subtitle,
      },
    } = this.state;

    const { isLoading } = this.state;

    if (isLoading) {
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
        <Link to="/">VOLTAR </Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
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
