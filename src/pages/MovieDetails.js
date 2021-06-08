import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
      loading: true,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  //  Quando o componente ser montado vai pegar o id do filme que está na página e invocar a função que vai setar no state o filme.
  componentDidMount() {
    const { pathname } = window.location;
    const id = pathname.match(/(?<=\/)\d+/);
    this.fetchMovie(id);
  }

  //  Função que vai fazer um requisição na "API" e retornar o filme, setando ele no state.
  async fetchMovie(id) {
    const response = await movieAPI.getMovie(id);
    this.setState({ movie: response, loading: false });
  }

  //  Função para deletar um card, importada da "API", recebe o id como parâmetro e deleta o filme com aquele id.
  deleteCard(id) {
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading, shouldRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    //  Caso loading seja true irá renderizar o componente Loading
    if (loading) return <Loading />;

    //  Caso shouldRedirect seja true irá redirecionar para a home.
    if (shouldRedirect) return <Redirect to="/" />;

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
        <Link onClick={ () => this.deleteCard(id) } to="/">DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
