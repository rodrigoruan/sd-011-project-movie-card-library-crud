import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor({ match }){
    super({ match })

    this.state = {
      movieId: match.params.id,
      movie: []
    }

    this.fetchMovieInformations = this.fetchMovieInformations.bind(this);
  }

  componentDidMount() {
    this.fetchMovieInformations(this.state.movieId)
  }

  async fetchMovieInformations(movieId) {
    const data = await movieAPI.getMovie(movieId);
    this.setState({ movie: data });
  }

  render() {
    const { movie, movieId } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    
    if (movie.length === 0) return <Loading />;

    return (
      <div data-testid="movie-details">
        <h1>Estou no movie details</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button">
          <Link to={`/movie/${movieId}/edit`} >EDITAR</Link>
        </button>
        <button type="button">
          <Link to="/" >VOLTAR</Link>
        </button>
      </div>
    );
  }
}

export default MovieDetails;
