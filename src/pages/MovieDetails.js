import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      chosenMovie: '',
      loadingPage: true,
    };

    this.getMovie = this.getMovie.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const searchedMovie = await movieAPI.getMovie(id);
    this.setState({ chosenMovie: searchedMovie, loadingPage: false });
  }

  async deleteCard() {
    const { match } = this.props;
    const { id } = match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { chosenMovie, loadingPage } = this.state;
    const { imagePath, title, subtitle, storyline, genre, rating, id } = chosenMovie;

    return (

      <div>
        { loadingPage ? (<Loading />) : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Title: ${title}` }</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
            <Link to="/" onClick={ this.deleteCard }>DELETAR</Link>
          </div>) }
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
