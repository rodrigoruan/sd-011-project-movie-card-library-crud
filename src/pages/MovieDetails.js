import React, { Component } from 'react';
import Button from '../components/Button';

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

  render() {
    const { params: { id } } = this.props.match;
    const { isLoading } = this.state;
    const { movie: {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Button path={ `/movies/${id}/edit` } text="EDITAR" />
        <Button path="/" text="VOLTAR" />
      </div>
    );
  }
}

export default MovieDetails;
