import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovie } from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovieDetails(id);
  }

  fetchMovieDetails(id) {
    this.setState({ loading: true });
    getMovie(id)
      .then((data) => this.setState({
        movie: data,
        loading: false,
      }));
  }

  render() {
    const {
      loading,
      movie: {
        id,
        title,
        imagePath,
        storyline,
        subtitle,
        genre,
        rating,
      },
    } = this.state;

    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <span>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </span>
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
