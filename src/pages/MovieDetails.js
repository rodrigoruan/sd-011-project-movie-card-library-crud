import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.abobora = true; // Inclui esse this para corrigir memory leak - contei com a super ajuda do Inácio
    this.fetchAPI();
  }

  componentWillUnmount() { // preciso incluir na desmontagem para de fato corrigir o leak
    this.abobora = false;
  }

  async fetchAPI() { // Passo 5 - faz uma requisição para buscar o filme que deverá ser renderizado (getMovie)
    const { match } = this.props; // prop match disponibilizada pelo componente Route, possui 4 propriedades: isExact (bool), params, path e url.
    const { id } = match.params; // atribuo o id ao params.
    movieAPI.getMovie(id).then((movie) => { // assim como o movieList aguarda a requisição (promise - agora com then)
      if (this.abobora) { // incluir essa condição para corrigir o memory leak
        this.setState({
          movie,
          loading: false,
        });
      }
    })
      .catch((err) => console.error(err));
  }

  async deleteMovie() { // Passo 8 - faz nova requisição para deletar o filme
    const { match } = this.props;
    const { id } = match.params;
    const deleteMovies = await movieAPI.deleteMovie(id);
    if (!this.abobora) return; //  escape condition or early return - importante incluir essa condição aqui, caso contrário não corrige o leak
    this.setState({
      movie: deleteMovies,
      loading: false,
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </button>
        <button type="button">
          <Link to="/">VOLTAR</Link>
        </button>
        <button type="button">
          <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
        </button>
      </div>
    );// é importante colocar o path do link em templates para trazer dinamismo a página e conseguir modificar exatamente o id clicado. O path do Voltar retoran à home.
    // É preciso o onClick no delete, pois a função será executada ao clicarmos no botão. Apenas no didMount até roda, mas gera outros erros (requisito 5).
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};
