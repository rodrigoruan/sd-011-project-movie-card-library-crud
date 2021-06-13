import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.state = {
      status: 'loading', // Acho que poderia começas com outro valor, pra poder usar pela URL.
      shouldRedirect: false,
      id: id, // Recebeu de this.props.match.params
      movie: {}, // Recebe de componentDidMount pra passar para <MovieForm />
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) { // Executa após o retorno do componente <MovieForm />
    // Após executar aqui, seta o "shouldRedirect" do state para TRUE
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  componentDidMount() {
    // Fazer requisição baseado no ID do STATE.
    // Setar o "movie" do STATE com o retorno de filme relacionado a esse ID
    // Após retorno da API, seta a entrada "status" em STATE para algo diferente de 'loading' 
    this.fetchMovie();
  }

  async fetchMovie() { // Busca o filme pelo ID passado por props
    // Aqui é quase o mesmo contéudo da função fetchMovie() em MovieDetails.js
    // O motivo para existir essa função é que irá carregar o filme no state e a outra função irá atulizar pegando de lá.
    // O Motivo de dar essa volta, ao invés de passar direto por props do pai é que assim podemos, talvez, editar buscando pelo ID direto na URL; ou seja, mais dinâmico.
    const { id } = this.state;

    this.setState({ status: 'loading' },
      async () => {
        const requestReturn = await movieAPI.getMovie(id);
        this.setState({
          status: 'done',
          movie: requestReturn,
        });
      });
  }


  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" /> // Redireciona para "/" quando o estado de "shouldredirect" é igual a TRUE
    }

    if (status === 'loading') {
      // render Loading
      return <Loading /> // Carrega esse componente enquanto o estado de status for 'loading'

    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
