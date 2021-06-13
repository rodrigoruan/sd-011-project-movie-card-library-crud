import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loader: false, // Talvez devia começar com TRUE, mas como é por ID em props.params aí não sei.
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() { // Busca o filme pelo ID passado por props
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.setState({ loader: true },
      async () => {
        const requestReturn = await movieAPI.getMovie(id);
        this.setState({
          loader: false, 
          movie: requestReturn,
        });
      });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loader } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">

        {loader
          ? <Loading />
          : (
            <div>
              <span><Link to="/">VOLTAR</Link></span>
              <span><Link to={ `/movies/${id}/edit` }>EDITAR</Link></span>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{ `Title: ${title}` }</p>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
            </div>
          )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: { id: PropTypes.number },
  }).isRequired,
};

export default MovieDetails;
