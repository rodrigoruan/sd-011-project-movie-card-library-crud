import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: [],
    };
    this.getMovieAPI = this.getMovieAPI.bind(this);
  }

  componentDidMount() {
    this.getMovieAPI();
  }

  async getMovieAPI() {
    const { match } = this.props;
    const { id } = match.params;
    const result = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie: result,
    });
  }

  render() {
    const { loading, movie } = this.state;
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return loading ? <Loading /> : (
      <div data-testid="movie-details">
        <h2>{ `Title: ${title}` }</h2>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">
          VOLTAR
        </Link>
        <Link to={ `/movies/${id}/edit` }>
          EDITAR
        </Link>
        <Link
          to="/"
          onClick={ () => movieAPI.deleteMovie(id) }
        >
          DELETAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string,
    }),
  }).isRequired,
};
