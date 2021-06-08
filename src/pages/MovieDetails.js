import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchMovie = this.fetchMovie.bind(this);

    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.state = {
      loading: true,
      movieId: id,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { getMovie } = movieAPI;
    const { movieId } = this.state;

    this.setState(
      { loading: true },
      async () => {
        const resquestMovie = await getMovie(movieId);
        this.setState({
          loading: false,
          movie: resquestMovie,
        });
      },
    );
  }

  render() {
    const { movie, loading, movieId } = this.state;

    // Change the condition to check the state
    // if (true) return <Loading />;
    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${movieId}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: {
    params: {
      id: PropTypes.number,
    },
  }.isRequired,
};

export default MovieDetails;
