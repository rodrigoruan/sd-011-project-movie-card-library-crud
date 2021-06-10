import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      movie: [],
    };

    this.gettingASingleMovie = this.gettingASingleMovie.bind(this);
  }

  componentDidMount() {
    this.gettingASingleMovie();
  }

  async gettingASingleMovie() {
    const { id } = this.props.match.params;
    const response = await movieAPI.getMovie(id);

    this.setState({
      movie: response,
      isLoading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie: { title, storyline, imagePath, genre, rating, subtitle, id } } = this.state;
    const { isLoading } = this.state;

    return isLoading ? <Loading /> : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{title}</p>
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
