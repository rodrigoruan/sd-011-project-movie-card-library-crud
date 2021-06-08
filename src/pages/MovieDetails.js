import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
      id: undefined,
    };

    this.onMount = this.onMount.bind(this);
    this.renderMovieDetails = this.renderMovieDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.mounted = true;
    this.onMount(this.props);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleSubmit() {
    const { id } = this.state;
    movieAPI.deleteMovie(id);
  }

  onMount(props) {
    const { id } = props.match.params;
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
      async () => {
        const requestedMovie = await movieAPI.getMovie(id);
        if (this.mounted) {
          this.setState({
            loading: false,
            movie: requestedMovie,
            id,
          });
        }
      },
    );
  }

  renderMovieDetails() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{ `Title: ${title}` }</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/"> VOLTAR </Link>
        <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
        <Link to="/" onClick={ this.handleSubmit }> DELETAR </Link>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { loading } = this.state;

    return (
      <div>
        {loading ? <Loading /> : this.renderMovieDetails() }
      </div>
    );
  }
}

export default MovieDetails;
