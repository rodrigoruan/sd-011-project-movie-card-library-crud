import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
    this.catchFavoriteMovie = this.catchFavoriteMovie.bind(this);
  }

  componentDidMount() {
    this.catchFavoriteMovie();
  }

  async catchFavoriteMovie() {
    // localização das propriedades recebidas na URL e valido só os que irei utilizar
    const { match: { params: { id } } } = this.props;
    // consulta na APi para buscar o gato especifico com base no id que retorna uma promise
    const catchFavorites = await movieAPI.getMovie(id);
    this.setState({
      //  salva os catchFavorites no estado movie
      movie: catchFavorites,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    // const { title, subtitle, storyline, genre, rating} = movie;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    // */Para resolver o problema no lint relativo ao uso do ternário após os parenteses, eu consultei o repositório do Alberto Candido
    // */Source: https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/7/files

    return loading ? <Loading /> : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
