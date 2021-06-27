import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    const { match: { params: { id } } } = this.props;
    this.state = {
      movie: {},
      loading: true,
      id,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState({ loading: true }, async () => {
      const { id } = this.state;
      const response = await movieAPI.getMovie(id);
      this.setState({ movie: response, loading: false });
    });
  }

  render() {
    // Change the condition to check the state
    const { movie, loading, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    // if (true) return <Loading />;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ `Title: ${title}` }</h4>
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

MovieDetails.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  storyline: propTypes.string,
  genre: propTypes.string,
  rating: propTypes.number,
}.isRequired;

export default MovieDetails;
