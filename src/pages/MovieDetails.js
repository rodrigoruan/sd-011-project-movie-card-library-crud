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
    this.deletarMovie = this.deletarMovie.bind(this);
  }

  componentDidMount() {
    this.theMovie();
  }

  async theMovie() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id).then((response) => {
      this.setState({
        movie: response,
        loading: false,
      });
    });
  }

  deletarMovie() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
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
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deletarMovie }>DELETAR</Link>
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
