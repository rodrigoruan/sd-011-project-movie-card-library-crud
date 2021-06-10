import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.renderMovieElement = this.renderMovieElement.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    this.setState(
      { loading: true },
      async () => {
        const { match } = this.props;
        const { params } = match;
        const { id } = params;
        const requestMovie = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: requestMovie,
          shouldRedirect: false,
        });
      },
    );
  }

  deleteMovie(id) {
    movieAPI.deleteMovie(id).then(this.setState({ shouldRedirect: true }));
  }

  renderMovieElement() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ `Title: ${title}` }</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <br />
        <Link to="/">VOLTAR</Link>
        <br />
        <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
        <br />
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <span>
        { loading ? <Loading /> : this.renderMovieElement() }
      </span>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieDetails;
