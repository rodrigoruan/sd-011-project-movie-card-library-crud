import React, { Component } from 'react';
import { shape, string } from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
  }

  // componentDidMount() {
  //   this.listMovies();
  // }

  // listMovies() {
  //   const { match } = this.props;
  //   const { params } = match;
  //   const { id } = params;
  //   movieAPI.getMovie(id)
  //     .then((movie) => this.setState({ movie, loading: false }));
  // }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie, loading: false }));
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
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

export default MovieDetails;
