import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
// import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      detailMovie: '',
      loading: true,
    };
    this.movieDetail = this.movieDetail.bind(this);
  }

  componentDidMount() {
    this.movieDetail();
  }

  async movieDetail() {
    const { match: { params: { id } } } = this.props;
    const detail = await movieAPI.getMovie(id);
    this.setState({ detailMovie: detail, loading: false });
  }

  functionDeleteCard(movieId) {
    movieAPI.deleteMovie(movieId);
    // then()
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { detailMovie } = this.state;
    const { loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = detailMovie;

    if (loading === true) {
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

        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.functionDeleteCard(id) }>DELETAR</Link>
      </div>
    );
  }
}

// MovieDetails.propTypes = {
// falta arrumar as props
// };

// MovieDetails.propTypes = {
//   detailMovie: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//     storyline: PropTypes.string.isRequired,
//     imagePath: PropTypes.string,
//     genre: PropTypes.string.isRequired,
//     rating: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default MovieDetails;
