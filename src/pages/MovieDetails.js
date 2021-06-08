import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      movie: {},
    };
    this.fetchApi = this.fetchApi.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  handleClick() {
    const { movie } = this.state;
    const { id } = movie;
    const { deleteMovie } = movieAPI;
    deleteMovie(id);
  }

  async fetchApi() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;
    this.setState({ loading: true },
      async () => {
        const requestResponse = await getMovie(id);
        this.setState({
          loading: false,
          movie: requestResponse,
        });
      });
  }

  render() {
    const { loading } = this.state;
    if (loading === true) return <Loading />;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <p>{ `Title: ${title}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.handleClick }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
