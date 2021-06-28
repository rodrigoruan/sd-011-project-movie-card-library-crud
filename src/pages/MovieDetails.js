import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      loading: true,
    };
    this.getMovie = this.getMovie.bind(this);
  }

  async componentDidMount() {
    this.getMovie();
  }

  getMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie, loading: false });
  }

  deleteMovie = async () => {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{`title: ${title}`}</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">
          VOLTAR
        </Link>
        <br />
        <Link
          to={ { pathname: `/movies/${id}/edit`,
            state: { params: { id } },
          } }
        >
          EDITAR

        </Link>
        <Link to="/" onClick={ this.deleteMovie }> DELETAR</Link>

      </div>
    );
  }
}

export default MovieDetails;
