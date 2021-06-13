import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movie: {
        title: '',
        storyline: '',
        imagePath: '',
        genre: '',
        rating: 0,
        subtitle: '',
      },
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.pageConstructor = this.pageConstructor.bind(this);
  }

  async componentDidMount() {
    await this.fetchMovie();
  }

  async fetchMovie() {
    const { params: { id } } = this.props.match;
    const movie = await movieAPI.getMovie(id);

    this.setState({
      movie,
      isLoading: false,
    });
  }

  pageConstructor() {
    const { params: { id } } = this.props.match;

    const { movie: {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } } = this.state;

    const { isLoading } = this.state;

    if (!isLoading) {
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <button type="button">
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          </button>
          <button type="button">
            <Link to="/">VOLTAR</Link>
          </button>
        </div>
      );
    }
    return <Loading isLoading={ isLoading } />;
  }

  render() {
    return (

      this.pageConstructor()

    );
  }
}

export default MovieDetails;
