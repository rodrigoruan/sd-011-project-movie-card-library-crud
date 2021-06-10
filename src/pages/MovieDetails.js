import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.param;
    this.onMount(() => {
      this.setState(
        { loading: true },
        async () => {
          this.setState({
            movie: await getMovie(id),
            loading: false,
          });
        },
      );
    });
  }

  deleteMovie() {
    const { match } = this.props;
    const { id } = match.param;
    deleteMovie(id);
    return <Redirect to="/" />;
  }

  render() {
    const { movie, loading } = this.state;
    const { match } = this.props;
    const { id } = match.param;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading === true) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link onClick={ this.deleteMovie } to="/">DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
