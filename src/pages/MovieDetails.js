import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = { movie: undefined };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const movieApi = await getMovie(id);
    console.log(movieApi);
    this.setMovie(movieApi);
  }

  setMovie(movie) {
    this.setState({ movie });
  }

  render() {
    const { movie } = this.state;
    if (movie === undefined) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const redirectLinkEdit = `/movies/${id}/edit`;
    return (
      <div data-testid="movie-details">
        <h2>{ title }</h2>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ redirectLinkEdit }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link onClick={ () => deleteMovie(id) } to="/">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.isRequired,
  match: PropTypes.isRequired,
};

export default MovieDetails;
