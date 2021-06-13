import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components'; // importação componente Loading.js

/*
Componente MovieDetails.js
O requisito 4 pede que quando montado deve fazer uma requisição utilizando a função getMovie
passando o id do filme. O componente Loading deve ser renderizado enquanto a requisição estiver em curso. Após terminar, deve-se renderizar um card com mais detalhes sobre o filme
*/

class MovieDetails extends Component {
  // crio um contrutor com o super com as props como parametro e tambem crio o stado inicial vazio de movie para armazenar o estado do filme e um outro com loading boleano com o valor true inicial.
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      loading: true,
    };
    // faço o bind das funções para que possam ser utilizadas com o this no render
    this.fetchMovie = this.fetchMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
  }
  // O component did mount é usado aqui pois queremos que os filme seja buscado apos o carregamento inicial da pagina, dessa vez descontruimos o match que é um objeto que foi passado por referencia via URL, buscando o ID do filme. depois chamamos a função fetchMovie passando esse id como parametro.

  componentDidMount() {
    const { match } = this.props;
    this.fetchMovie(match.params.id);
  }

  // A função fetchMovie é bem paracida com a que temos em MovieList ela tem como finalidade buscar um filme utilizando o id como parametro para trazer o filme expecifico, precisa ser assincrona pois ela deve aquardar a resposta da API ela seta o state loading para false assim que a temos o retorno da função e guarda as informações do filme no state movie.

  async fetchMovie(id) {
    const resultMovie = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie: resultMovie,
    });
  }
  // No requisito 7 será pedido para que em movie detais seja adicionada a função de remover um filme, para isso, a função removeMovie foi criada. A principio desconstruimos o state movie e pegamos o id e avaiso usamos a api deleteMovie com o id como parametro para remover determinado filme
  // essa função precisa ser assincrona pelo fato de usar a requisição a API mas ela precisa estar dentro do componentDidMount pois so sera usada apos o carregamento total da pagina.

  async removeMovie() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id);
  }

  render() {
    // desconstrução dos estados movie e loading
    const { movie, loading } = this.state;
    // condicional -> caso loadind seja true renderiza o componente loading
    if (loading === true) return <Loading />;
    // descontrução de movie
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    // renderização do filme com seus elementos
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        {/* botão editar que redireciona com o id para o editMovie */}
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        {/* Um link para voltar para a home (/) */}
        <Link to="/">VOLTAR</Link>
        {/* E um link para deletar o filme selecionado - requisito 7 */}
        <Link to="/" onClick={ this.removeMovie }>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
// validação da prop id
MovieDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;
