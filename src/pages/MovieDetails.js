import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.state = {
      id,
      movie: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }

  async fetchMovieDetails() {
    const { id } = this.state;
    this.setState({ loading: true });
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { loading, id, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading) {
      return <Loading />;
    }
    return (
      <section>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </section>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default MovieDetails;
