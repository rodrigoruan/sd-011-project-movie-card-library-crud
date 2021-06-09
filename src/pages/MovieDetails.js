import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };

    this.fecthGetMovie = this.fecthGetMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fecthGetMovie();
  }

  async fecthGetMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const data = await movieAPI.getMovie(id);
    this.setState({
      movie: data,
      loading: false,
    });
  }

  async deleteMovie() {
    const { match } = this.props;
    const { id } = match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle } = movie;

    if (loading) return <Loading />;

    return (
      <div>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
