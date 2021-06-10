import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.gettingMovieApi();
  }

  async gettingMovieApi() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { loading: true },
      async () => {
        const requestRtn = await movieAPI.getMovie(id);
        this.setState({
          movie: requestRtn,
          loading: false,
        });
      },
    );
  }

  render() {
    // Change the condition to check the state
    const { movie, loading } = this.state;
    if (loading) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </div>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.array).isRequired,
  id: PropTypes.string.isRequired,
};

export default MovieDetails;
