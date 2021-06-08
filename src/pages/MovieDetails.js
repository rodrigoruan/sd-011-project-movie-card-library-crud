import React, { Component } from 'react';
import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  handleState(movie) {
    this.setState({
      movie,
      loading: false,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getMovie(id).then((movie) => {
      this.handleState(movie);
    });
  }
  render() {
    const { movie, loading } = this.state;
    // Change the condition to check the state
    // if (true) return <Loading />;

    if (loading) {
      return (
        <Loading />
      );
    }
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to='/'>VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
