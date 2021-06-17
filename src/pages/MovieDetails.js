import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      details: {},
      loading: true,
      id: undefined,
    };
    this.fetchDetails = this.fetchDetails.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchDetails();
  }

  handleDelete() {
    const { id } = this.state;
    movieAPI.deleteMovie(id);
  }

  async fetchDetails() {
    const { match: { params: { id } } } = this.props;
    const details = await movieAPI.getMovie(id);
    this.setState({
      details,
      loading: false,
      id,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const {
      id,
      loading,
      details: { title, storyline, imagePath, genre, rating, subtitle },
    } = this.state;
    const footerClas = 'movie-card-foo-text';
    return (
      <div>
        {
          loading
            ? <Loading />
            : (
              <div data-testid="movie-details" className="movie-card-details">
                <img alt="Movie Cover" src={ `../${imagePath}` } />
                <p>{ `Title: ${title}` }</p>
                <p>{ `Subtitle: ${subtitle}` }</p>
                <p>{ `Storyline: ${storyline}` }</p>
                <p>{ `Genre: ${genre}` }</p>
                <p>{ `Rating: ${rating}` }</p>
                <div className="movie-card-footer">
                  <Link to="/" className={ footerClas }>VOLTAR</Link>
                  <Link to={ `/movies/${id}/edit` } className={ footerClas }>EDITAR</Link>
                  <Link
                    to="/"
                    className={ footerClas }
                    onClick={ this.handleDelete }
                  >
                    DELETAR
                  </Link>
                </div>
              </div>
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
