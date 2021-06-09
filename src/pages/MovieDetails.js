import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: true,
    };
    this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    movieAPI.getMovie(id)
      .then((data) => {
        this.setState({ movie: data, loading: false });
      })
      .catch((error) => console.log(error));
  }

  removeMovie() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match } = this.props;
    const { id } = match.params;

    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Titulo: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={ this.removeMovie }>DELETAR </Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.array).isRequired,
  id: PropTypes.string.isRequired,
};

export default MovieDetails;
