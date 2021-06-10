import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = ({
      movie: {},
      isLoading: true,
    });

    this.movieDetails = this.movieDetails.bind(this);
  }

  componentDidMount() {
    this.asyncGetMovie();
  }

  async asyncGetMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);

    this.setState({
      movie,
      isLoading: false,
    });
  }

  movieDetails() {
    const { movie } = this.state;
    const { storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? <Loading /> : this.movieDetails()}</div>;
  }
}

export default MovieDetails;
