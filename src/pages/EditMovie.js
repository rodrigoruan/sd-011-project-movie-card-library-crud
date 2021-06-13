import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

/*
Componente EditMovie.js
Requisito 5 -> Ao ser montada, a página de edição do filme deve fazer uma requisição pra buscar o filme que será editado e deve, ao ter seu formulário submetido, atualizar o filme e redirecionar a página pra rota raíz
*/

class EditMovie extends Component {
  // criação do construtor com o Super passando como parametro o props
  constructor(props) {
    super(props);
    // state criando com o movie(vazio) -> armazenar as informações do filme, status com o valor loading e shouldRedirect boleano setado para false
    this.state = {
      movie: '',
      status: 'loading',
      shouldRedirect: false,
    };
    // É feito o bind das funções para utilização do this a seguir
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }
  // O component did mount é usado aqui pois queremos que os filme seja buscado apos o carregamento inicial da pagina, dessa vez descontruimos o match que é um objeto que foi passado por referencia via URL, buscando o ID do filme. depois chamamos a função fetchMovie passando esse id como parametro.

  componentDidMount() {
    const { match } = this.props;
    this.fetchMovie(match.params.id);
  }
  // função assincrona handleSubmit tem como objetivo utilizar a função updateMovie da API para editar o filme , tambem seta o sholdRedirect para true afim de redirecionar para o componente home (/) assim que o filme for editado

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }
  // A função fetchMovie é bem paracida com a que temos em EditMOvie ela tem como finalidade buscar um filme utilizando o id como parametro para trazer o filme expecifico, precisa ser assincrona pois ela deve aquardar a resposta da API ela seta o state loading para false assim que a temos o retorno da função e guarda as informações do filme no state movie.

  async fetchMovie(id) {
    const resultMovie = await movieAPI.getMovie(id);
    this.setState({
      status: '',
      movie: resultMovie,
    });
  }

  render() {
    // descontrução do estado
    const { status, shouldRedirect, movie } = this.state;
    // caso o shouldRedirect for true redirecionaremos a pagina para o Home
    if (shouldRedirect === true) {
      return <Redirect to="/" />;
    }
    // caso se o status for = 'loading' renderizamos o componente loading
    if (status === 'loading') {
      return <Loading />;
    }

    return (
      // aqui renderizamos os dados do movie quando clicado no botão submit e passamos via props a função handleSubmit
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
// validação das props EditMovie
EditMovie.propTypes = {
  id: PropTypes.string,
}.isRequired;
