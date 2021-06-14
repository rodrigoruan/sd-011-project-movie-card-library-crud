import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loadingDetails: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.requestReturn(id);
  }

  requestReturn = async (name) => {
    this.setState({
      movie: await movieAPI.getMovie(name),
      loadingDetails: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie:
        { title, storyline, imagePath, genre,
          rating, subtitle, id } } = this.state;

    const { loadingDetails } = this.state;

    if (loadingDetails) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Tile: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link className="link" to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link className="link" to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  location: PropTypes.object,
  aboutProps: PropTypes.shape({
    name: PropTypes.number,
  }),
}.isRequired;
