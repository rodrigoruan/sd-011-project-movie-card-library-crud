import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      movie: '',
      loading: true,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  // Pega o ID do filme e afunção que vai setar no state do filme quando o componente for montado.
  componentDidMount() {
    const { pathname } = window.location;
    const id = pathname.match(/(?<=\/)\d+/);
    this.fetchMovie(id);
  }

  // Fazer requisição na API e retorna o filme setando no state.
  async fetchMovie(id) {
    const response = await movieAPI.getMovie(id);
    this.setState({ movie: response, loading: false });
  }

  // Recebe um ID como parâmetro e deleta o filme com o mesmo ID.
  deleteCard(id) {
    movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movie, shouldRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

     //  Se o loading for verdadeiro vai renderizar o componente Loading...
     if (loading) return <Loading />;

     //  Se o shouldRedirect for verdadeiro vai redirecionar para a home.
     if (shouldRedirect) return <Redirect to="/" />;

    return (
      <div data-testid="movie-details">
        <h1>{ `Title: ${ title }` }</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link onClick={ () => this.deleteCard(id) } to="/">DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
