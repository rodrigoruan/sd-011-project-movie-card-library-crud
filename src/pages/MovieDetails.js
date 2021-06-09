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
      status: true,
    };

    this.specificMovie = this.specificMovie.bind(this);
  }

  async componentDidMount() {
    this.specificMovie();
  }

  async specificMovie() {
    // https://pt.stackoverflow.com/questions/391641/como-passar-parametros-via-url-para-uma-aplica%C3%A7%C3%A3o-em-react
    console.log(this.props);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const response = await movieAPI.getMovie(id);
    this.setState({ movie: response, status: false });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, status } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return status === false ? (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{`Title: ${title}`}</h3>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button type="button">
          <Link to="/"> VOLTAR </Link>
        </button>
        <button type="button">
          <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
        </button>
        <button type="button">
          <Link to="/"> DELETAR </Link>
        </button>
      </div>
    ) : (
      <Loading />
    );
  }
}

MovieDetails.propTypes = {
  // https://stackoverflow.com/questions/47519612/eslint-match-is-missing-in-props-validation-react-prop-types/47519751
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
