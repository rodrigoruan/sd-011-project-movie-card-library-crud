import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.state = {
      id,
      isLoaded: false,
      movie: {},
    };
    this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  async componentDidMount() {
    const { id } = this.state;
    console.log(id);
    this.getMovieDetails(id);
  }

  async getMovieDetails(id) {
    const movie2 = await movieAPI.getMovie(id);
    console.log(movie2);
    this.setState({
      isLoaded: true,
      movie: movie2,
    });
  }

  render() {
    const { isLoaded, movie, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (isLoaded === false) {
      return (
        <div data-testid="movie-details">
          <Loading />
        </div>
      );
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
