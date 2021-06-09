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

    this.getMovieById = this.getMovieById.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getMovieById();
  }

  async getMovieById() {
    const { match: { params: { id } } } = this.props;
    const movieById = await movieAPI.getMovie(id);
    this.setState({
      movie: movieById,
      loading: false,
    });
  }

  deleteMovie(id) {
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const {
      movie: { id, title, storyline, imagePath, genre, rating, subtitle },
    } = this.state;
    const { loading } = this.state;

    if (loading) {
      return (<Loading />);
    }

    return (
      <div className="movie-card" data-testid="movie-details">
        <img
          className="movie-card-image"
          src={ `../${imagePath}` }
          alt="Movie Cover"
        />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</h5>
          <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
          <p className="movie-card-storyline">{ `Genre: ${genre}` }</p>
        </div>
        <div className="movie-card-rating">
          <p className="rating">{ `Rating: ${rating}` }</p>
        </div>
        <div className="links">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
