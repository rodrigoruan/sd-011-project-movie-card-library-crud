import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieDetailsComp from '../components/MovieDetailsComp';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movieData: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({
        movieData: movie,
      }));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    // <img alt="Movie Cover" src={ `../${imagePath}` } />
    // <p>{ `Subtitle: ${subtitle}` }</p>
    // <p>{ `Storyline: ${storyline}` }</p>
    // <p>{ `Genre: ${genre}` }</p>
    // <p>{ `Rating: ${rating}` }</p>

    const { movieData } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movieData;

    return (
      <div data-testid="movie-details">
        { movieData
          ? <MovieDetailsComp
              id={ id }
              title={ title }
              storyline={ storyline }
              imagePath={ imagePath }
              genre={ genre }
              rating={ rating }
              subtitle={ subtitle }
          />
          : <Loading />}
      </div>
    );
  }
}

export default MovieDetails;
