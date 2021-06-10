import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.setSelectMovie = this.setSelectMovie.bind(this);
    this.delMovie = this.delMovie.bind(this);

    this.state = {
      movieId: 0,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const selectMovie = await movieAPI.getMovie(id);
    this.setSelectMovie(selectMovie);
  }

  setSelectMovie(selectMovie) {
    this.setState({
      movieId: selectMovie,
    });
  }

  async delMovie() {
    const { match } = this.props;
    const { id } = match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { movieId } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movieId;

    return (
      <div>
        { movieId === 0 ? (
          <Loading />
        ) : (
          <div className="movie-card" data-testid="movie-details">
            <img
              className="movie-card-image"
              alt="Movie Cover"
              src={ `../${imagePath}` }
            />
            <p className="movie-card-title">{ `Title: ${title}` }</p>
            <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
            <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p className="rating">{ `Rating: ${rating}` }</p>
            <section className="link">
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
              <Link to="/" onClick={ this.delMovie }>DELETAR</Link>
            </section>
          </div>)}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
  params: PropTypes.shape({
    id: PropTypes.number,
  }),
}.isRequired;

export default MovieDetails;
