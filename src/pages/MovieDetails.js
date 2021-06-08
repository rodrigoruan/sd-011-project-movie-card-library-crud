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

    this.movieFetch = this.movieFetch.bind(this);
  }

  componentDidMount() {
    this.movieFetch();
  }

  async movieFetch() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;
    const request = await getMovie(id);
    this.setState({
      movie: request,
      loading: false,
    });
  }

  render() {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `Title: ${title}` }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

// consulta para compreender como definir 2 tipos para proptypes ID https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  }).isRequired,
};
