import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      id: '',
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      genre: '',
      rating: 0,
    };
    this.getMovie = this.getMovie.bind(this);
    this.idEdit = this.idEdit.bind(this);
    this.eraseMovie = this.eraseMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    const { match } = this.props;
    const idMovie = match.params.id;
    this.setState({
      loading: true,
    },
    () => {
      movieAPI.getMovie(idMovie)
        .then((resolve) => {
          this.setState({
            id: resolve.id,
            title: resolve.title,
            subtitle: resolve.subtitle,
            storyline: resolve.storyline,
            imagePath: resolve.imagePath,
            genre: resolve.genre,
            rating: resolve.rating,
            loading: false,
          });
        });
    });
  }

  idEdit() {
    const { id } = this.state;
    const pathEdith = `/movies/${id}/edit`;
    return pathEdith;
  }

  eraseMovie() {
    const { id } = this.state;
    const { history } = this.props;
    movieAPI.deleteMovie(id)
      .then((resolve) => {
        if (resolve.status === 'OK') {
          history.push('/');
        }
      });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, loading } = this.state;
    const { history } = this.props;
    if (loading === true) {
      return (<Loading />);
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ this.idEdit() }>EDITAR</Link>
        <Link to={ history } onClick={ () => { this.eraseMovie(); } }>DELETAR</Link>

      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
