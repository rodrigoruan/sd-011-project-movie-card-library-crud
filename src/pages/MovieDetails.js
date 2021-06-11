import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.handleRequest();
  }

  async handleRequest() {
    const { match } = this.props;
    this.setState({ loading: true });
    const request = await movieAPI.getMovie(match.params.id);
    this.setState({
      loading: false,
      movie: request,
    });
  }

  renderCard() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{ `Title: ${title}` }</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${movie.id}/edit` }> EDITAR </Link>
        <br />
        <br />
        <Link to="/"> VOLTAR </Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : this.renderCard()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.exact().isRequired,
};

export default MovieDetails;
