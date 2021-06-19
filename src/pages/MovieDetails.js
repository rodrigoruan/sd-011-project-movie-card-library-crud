import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: [],
      propId: props,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { propId: { match: { params: { id } } } } = this.state;

    this.setState(
      { loading: true },
      async () => {
        const response = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: response,
        });
      },
    );
  }

  render() {
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading) {
      return <Loading />;
    }

    if (loading === false) {
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ title }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <div>
            <Link to="/">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          </div>
        </div>
      );
    }
  }
}

export default MovieDetails;
