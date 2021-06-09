import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: [],
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState(() => ({
      loading: true,
    }),
    async () => {
      const info = await movieAPI.getMovie(id);
      this.setState({
        movie: info,
        loading: false,
      });
    });
  }

  render() {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const pageData = (
      <div className="movie-body">
        <div className="movie-info">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div className="movie-btn">
          <button type="button">
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          </button>
          <button type="button">
            <Link to="/">VOLTAR</Link>
          </button>
        </div>
      </div>
    );

    const load = loading ? <Loading /> : pageData;
    return (
      <div data-testid="movie-details">
        { load }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
