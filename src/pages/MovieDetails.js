import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import style from './MovieDetails.module.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;

    const movie = await movieAPI.getMovie(parseInt(id, 10));

    this.setState({
      loading: false,
      movie,
    });
  }

  render() {
    const {
      loading,
      movie: { title, storyline, imagePath, genre, rating, subtitle, id },
    } = this.state;

    return (
      <div data-testid="movie-details" className={ style.container }>
        {
          loading
            ? <Loading />
            : (
              <section className={ style.card }>
                <div className={ style.cardHeader }>
                  <img alt="Movie Cover" src={ `../${imagePath}` } />
                  <span>{ title }</span>
                </div>
                <div className={ style.cardBody }>
                  <p>{ `Subtitle: ${subtitle}` }</p>
                  <p>{ `Storyline: ${storyline}` }</p>
                  <p>{ `Genre: ${genre}` }</p>
                  <p>{ `Rating: ${rating}` }</p>
                </div>
                <div className={ style.cardFooter }>
                  <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
                  <Link to="/">VOLTAR</Link>
                </div>
              </section>
            )
        }
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
