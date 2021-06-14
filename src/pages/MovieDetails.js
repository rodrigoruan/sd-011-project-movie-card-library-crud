import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      loading: true,
      shouldRedirect: false,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getMovieAPI();
  }

  async getMovieAPI() { // Req.4, chamando a função getMovie, onde é passado o id
    const { match: { params: { id } } } = this.props;
    const request = await movieAPI.getMovie(id);
    this.setState({
      movie: request,
      loading: false,
    });
  }

  deleteMovie() { // req. 7, função criada para deletar o cartão
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id).then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { movie: { title, storyline,
      imagePath, genre, rating, subtitle, id }, loading, shouldRedirect } = this.state; // desestruturando os estados

    // Change the condition to check the state
    if (loading) return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />; // o shouldRedirect poderia ter qualquer nome, exemplo: "xablau"

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link onClick={ this.deleteMovie } to="/">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
