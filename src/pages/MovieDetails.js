import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: [],
    };
    this.fecthApi = this.fecthApi.bind(this);
    this.fecthApiDELETE = this.fecthApiDELETE.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
  }

  componentDidMount() {
    this.fecthApi();
  }

  async fecthApi() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        this.setState({
          loading: false,
          movie: await movieAPI.getMovie(id),
        });
      },
    );
  }

  async fecthApiDELETE() {
    const { match: { params: { id } } } = this.props;

    await movieAPI.deleteMovie(id);
    return <Redirect to="/" />;
  }

  renderDetails() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <>
        <img src={ `../${imagePath}` } alt="Movie Cover" />
        <h2>{title}</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.fecthApiDELETE }>DELETAR</Link>
      </>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : this.renderDetails() }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  fecthApi: PropTypes.func,
  renderDetails: PropTypes.func,
}.isRequired;

MovieDetails.defaultProps = {
  movie: [{}],
};

export default MovieDetails;
