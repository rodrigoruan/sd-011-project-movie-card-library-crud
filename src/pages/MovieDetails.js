import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.state = {
      movies: [],
      movieFound: {},
      queryString: id,
    };
    this.requestMovies = this.requestMovies.bind(this);
    this.findMovie = this.findMovie.bind(this);
  }

  componentDidMount() {
    this.requestMovies();
  }

  async requestMovies() {
    const moviesArray = await movieAPI.getMovies();
    this.setState({ movies: moviesArray });
    this.findMovie();
  }

  findMovie() {
    const { movies, queryString } = this.state;
    const filter = movies.find((movie) => movie.id === parseInt(queryString, 10));
    this.setState({
      movieFound: filter,
    });
  }

  render() {
    // if (true) return <Loading />;
    const { movies, movieFound } = this.state;

    const { title, storyline, imagePath, genre, rating, subtitle } = movieFound;
    return (
      <div data-testid="movie-details">
        {
          movies.length === 0
            ? <Loading />
            : (
              <>
                <img alt="Movie Cover" src={ `../${imagePath}` } />
                <p>{ `Subtitle: ${title}` }</p>
                <p>{ `Subtitle: ${subtitle}` }</p>
                <p>{ `Storyline: ${storyline}` }</p>
                <p>{ `Genre: ${genre}` }</p>
                <p>{ `Rating: ${rating}` }</p>
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
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
