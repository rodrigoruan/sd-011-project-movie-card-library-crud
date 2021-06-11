import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = ({
      movie: {},
      isLoading: true,
    });

    this.movieDetails = this.movieDetails.bind(this);
  }

  componentDidMount() {
    this.asyncGetMovie();
  }

  async asyncGetMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);

    this.setState({
      id,
      movie,
      isLoading: false,
    });
  }

  movieDetails() {
    const { movie, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>

        <div>
          <span>
            <Link to={ `/movies/${id}/edit` }> EDITAR</Link>
          </span>

          <span>
            <Link to="/"> VOLTAR</Link>
          </span>
        </div>

      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? <Loading /> : this.movieDetails()}</div>;
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf({}),
    id: PropTypes.number,
  }).isRequired,
};
