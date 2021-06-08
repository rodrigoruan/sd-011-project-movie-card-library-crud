import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.mounted = true;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    movieAPI.getMovie(id)
      .then((movie) => {
        if (this.mounted) {
          this.setState({ movie, loading: false });
        }
      })
      .catch((err) => console.log(err));
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { movie, loading } = this.state;

    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <main data-testid="movie-details">
        <section>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h1>{`Title: ${title}`}</h1>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </section>

        <section>
          <button type="button">
            <Link to="/">VOLTAR</Link>
          </button>

          <button type="button">
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          </button>
        </section>
      </main>
    );
  }
}

export default MovieDetails;
