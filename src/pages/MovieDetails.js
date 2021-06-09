import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: [],
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.fetchMovie(id);
  }

  async fetchMovie(id) {
    this.setState({
      loading: true,
    },
    async () => {
      const data = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie: data,
      });
    });
  }

  renderMovie() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    const { match } = this.props;
    const { id } = match.params;
    return (
      <div>
        <div>
          {loading
            ? <Loading />
            : this.renderMovie()}
        </div>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
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
