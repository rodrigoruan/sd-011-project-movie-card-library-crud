import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
    this.catchFavoriteMovie = this.catchFavoriteMovie.bind(this);
  }

  componentDidMount() {
    this.catchFavoriteMovie();
  }

  async catchFavoriteMovie() {
    // localização das propriedades recebidas na URL, pois o match contem o id
    const { match: { params: { id } } } = this.props;
    // consulta na APi para buscar o movie especifico com base no id que retorna uma promise
    const catchFavorites = await movieAPI.getMovie(id);
    this.setState({
      //  salva os catchFavorites no estado movie
      movie: catchFavorites,
      loading: false,
    });
  }

  clickAndDelete(id) {
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    // const { title, subtitle, storyline, genre, rating} = movie;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return loading ? <Loading /> : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.clickAndDelete(id) }>DELETAR</Link>
      </div>
    );
  }
}

// Para resolver a questão 7, utlizei como base o link abaixo;
// /*s ource: https://stackoverflow.com/questions/42800815/how-to-use-onclick-event-on-react-link-component
export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
