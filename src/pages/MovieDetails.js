import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theMovie: 0,
    };
  }

  componentDidMount() {
    this.infoMovie();
  }

  async infoMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    console.log(movie);
    this.setState(() => ({
      theMovie: movie,
    }));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { theMovie } = this.state;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = theMovie;

    let result = 'Carregando...';

    if (theMovie !== 0) {
      result = (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{`Title: ${title}`}</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </div>
      );
    }

    return (
      <div>
        {result}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  }).isRequired,
};

export default MovieDetails;
