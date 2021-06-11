import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.state = {
      movie: {},
      queryString: id,
    };
    this.requestMovie = this.requestMovie.bind(this);
  }

  componentDidMount() {
    this.requestMovie();
  }

  async requestMovie() {
    const { queryString } = this.state;
    const movie = await movieAPI.getMovie(queryString);
    this.setState({ movie });
  }

  render() {
    // if (true) return <Loading />;
    const { movie, queryString } = this.state;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        {
          Object.keys(movie).length === 0
            ? <Loading />
            : (
              <>
                <img alt="Movie Cover" src={ `../${imagePath}` } />
                <p>{ `Subtitle: ${title}` }</p>
                <p>{ `Subtitle: ${subtitle}` }</p>
                <p>{ `Storyline: ${storyline}` }</p>
                <p>{ `Genre: ${genre}` }</p>
                <p>{ `Rating: ${rating}` }</p>
                <Link to="/">VOLTAR</Link>
                <Link to={ `/movies/${queryString}/edit` }>EDITAR</Link>
              </>
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
