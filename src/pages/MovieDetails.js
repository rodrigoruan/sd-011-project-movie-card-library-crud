// Requisitos resolvidos em sala de estudos no dia 27/06/2021
// com os colegas Nykolas Silva e José Henrique Margraf Melo

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      filmDetail: {},
    };
    this.filmDetail = this.filmDetail.bind(this);
  }

  componentDidMount() {
    this.filmDetail();
  }

  async filmDetail() {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    const filmDetail = await movieAPI.getMovie(id);
    this.setState({ filmDetail, loading: false });
    console.log(filmDetail);
  }

  render() {
    const { filmDetail, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = filmDetail;
    // Change the condition to check the state

    if (loading === true) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ `Title: ${title}` }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }> DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.number,
    }),
  }).isRequired,
};
// movies: propTypes.shape({
//   title: propTypes.string,
//   subtitle: propTypes.string,
//   storyline: propTypes.string,
//   genre: propTypes.string,
//   rating: propTypes.string,
//   id: propTypes.number,
// }).isRequired,

export default MovieDetails;
