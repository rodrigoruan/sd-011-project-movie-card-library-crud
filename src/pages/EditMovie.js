import React, { Component } from 'react';
import { Redirect } from 'react-router'; // importa o Redirect para permitir o redirecionamento
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      status: 'loading',
      movie: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.brocolli = true; // inclui na montagem - sucesso com os alimentos (pode ser qualquer nome - isMounted)
    this.fetchAPI();
  }

  componentWillUnmount() { // inclui o mount (brocolli) na desmontagem
    this.brocolli = false;
  }

  handleSubmit(updatedMovie) { // Passo 6 - essa requisição permite que o filme selecionado seja atualizado
    movieAPI.updateMovie(updatedMovie);
    if (!this.brocolli) return; //  escape condition or early return
    this.setState({ // atualiza o estado
      shouldRedirect: true,
    });
  }

  async fetchAPI() { // faz essa requisição para buscar o filme a ser renderizado
    const { match } = this.props;
    const { id } = match.params;
    const requestMovies = await movieAPI.getMovie(id);
    if (!this.brocolli) return; //  escape condition or early return
    this.setState({ // atualiza o estado
      status: 'loaded',
      movie: requestMovies,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) { // se o estado shouldRedirect é verdadeiro, redireciona para a Home. Isto é, após editar um card, seremos redirecionados ao início.
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};
