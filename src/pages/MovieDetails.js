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
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.getMovie(id)
      .then((movie) => {
        this.setState({ movie, loading: false });
      });
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    // Change the condition to check the state
    // if (true) return <Loading />;

    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : (
          <section>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `${title}` }</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
          </section>
        )}
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
