import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends React.Component {
  constructor() {
    super();

    this.getMoviesDetails = this.getMoviesDetails.bind(this);

    this.state = {
      movieId: 0,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const selectedMovie = await movieAPI.getMovie(id);
    this.getMoviesDetails(selectedMovie);
  }

  getMoviesDetails(selectedMovie) {
    this.setState({
      movieId: selectedMovie,
    });
  }

  render() {
    const { movieId } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movieId;

    return (
      <div>
        { movieId === 0 ? <Loading />
          : (
            <div data-testid="movie-details">
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{ `Title: ${title}` }</p>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <nav>
                <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
                <Link to="/">VOLTAR</Link>
              </nav>
            </div>)}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
  params: PropTypes.shape({
    id: PropTypes.number,
  }),
}.isRequired;

export default MovieDetails;
