import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

/*
componente NewMovie.js
Na rota /movies/new, utilizando a callback passada para MovieForm, NewMovie deve criar um novo cartão utilizando a função createMovie do módulo movieAPI. Após o fim da requisição, NewMovie deve redirecionar o app para a página inicial, contento o novo cartão.
*/

class NewMovie extends Component {
  constructor(props) {
    super(props);
    // contrutor , super + estado criados
    this.state = {
    // estado com shoulRedirect setado como false
      shouldRedirect: false,
    };
    // bind da função handleSubmit para ter acesso ao this dentro do render
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // função assincrona handleSubmit por usar a requisição de API para criação do filme passamos como parametro o dados adicionados em MovieForm

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    // mudamos o estado para true para que a pagina seja redirecionada pra o home (/) assim que o submit em MovieForms seja enviado
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    // caso o shouldRedirect seja true redirecionamos a pagina para o Home(/) a ideia é que apos de acrescentar o filme voce seja redirecionado para o Home - MovieList que exibira a lista de filmes
    if (shouldRedirect === true) {
      return <Redirect to="/" />;
    }
    return (
      // quando submetemos o form
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
