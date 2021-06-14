import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.returnMovie();
  }

  async returnMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        await movieAPI.getMovie(id)
          .then((responseMovie) => {
            this.setState({
              movie: responseMovie,
              loading: false,
            });
          });
      },
    );
  }

  async removeMovie(idMovie) {
    await movieAPI.deleteMovie(idMovie);
  }

  render() {
    const {
      movie: { id, title, storyline, imagePath, genre, rating, subtitle },
    } = this.state;
    const { loading } = this.state;
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
        <Link to="/"> VOLTAR </Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.removeMovie(id) }> DELETAR </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
export default MovieDetails;
