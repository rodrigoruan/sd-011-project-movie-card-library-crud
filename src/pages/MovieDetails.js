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
      movie: '',
    };
  }

  componentDidMount() {
    this.getMovieId();
  }

  async getMovieId() {
    const { match } = this.props;
    const { id } = match.params;
    const get = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie: get,
    });
  }

  Delete = async () => {
    const { match } = this.props;
    const { id } = match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Title: ${title}` }</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to={ `/movies/${id}/edit` } params={ id }>EDITAR</Link>
            <Link to="/" onClick={ this.Delete }>DELETAR</Link>
            {/* Tales ajudou a fazer isso o Bônus */}
            <Link to="/">VOLTAR</Link>
          </div>)}
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number,
    }), /* source:  https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html */
  }).isRequired,
};
