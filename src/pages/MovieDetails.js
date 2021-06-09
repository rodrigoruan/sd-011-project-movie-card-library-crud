import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from './components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: {},
    };
    this.listaMovie = this.listaMovie.bind(this);
    this.deleta = this.deleta.bind(this);
  }

  componentDidMount() {
    this.listaMovie();
  }

  listaMovie = async () => {
    const { match } = this.props;
    const { id } = match.params;
    const filme = await movieAPI.getMovie(id);
    this.setState({ movie: filme, loading: false });
  }

  deleta() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match } = this.props;
    const { id } = match.params;
    console.log(imagePath);
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <div>{ `title: ${title}` }</div>
        <div>{ `Subtitle: ${subtitle}` }</div>
        <div>{ `Storyline: ${storyline}` }</div>
        <div>{ `Genre: ${genre}` }</div>
        <div>{ `Rating: ${rating}` }</div>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleta }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.array).isRequired,
  id: PropTypes.string.isRequired,
};

export default MovieDetails;
