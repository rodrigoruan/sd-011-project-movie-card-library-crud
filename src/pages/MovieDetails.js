import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
    this.returnMovie = this.returnMovie.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    this.returnMovie(match.params.id);
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  async returnMovie(id) {
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie });
  }

  async removeMovie(idMovie) {
    await movieAPI.deleteMovie(idMovie);
  }

  render() {
    const { movie } = this.state;
    if (movie) {
      const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h3>{ `Title: ${title}` }</h3>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to="/"> VOLTAR </Link>
          <Link data-testid="edit-movie" to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }> DELETAR </Link>
        </div>
      );
    }

    return <Loading />;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
