import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      storyline: '',
      subtitle: '',
      genre: 'action',
      rating: 0,
      title:' ',
      imagePath: '',
      loading: true,
    };
    this.delete = this.delete.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI
      .getMovie(id)
      .then(({ subtitle, storyline, genre, title, rating, imagePath }) => {
        this.setState({
          subtitle,
          storyline,
          title,
          genre,
          rating,
          imagePath,
          loading: false,
          id,
        });
      })
      .catch((err) => console.error(err));
  }

  async delete() {
    const { match } = this.props;
    const { id } = match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { title,subtitle, storyline, genre, rating, imagePath, loading, id } = this.state;
    return (
      <section data-testid="movie-details">
        {loading ? (
          <Loading />
        ) : (
          <div className="movie-card">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
           <h2>{ `Title: ${title}`}</h2>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Rating: ${rating}` }</p>
          </div>
        )}
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.delete }>
          DELETAR
        </Link>
      </section>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
