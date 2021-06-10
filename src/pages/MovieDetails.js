import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';


class MovieDetails extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.renderMovieDetails = this.renderMovieDetails.bind(this);

    this.state = {
      id: props.match.params.id,
      movie: [],
      loading: true,
    }
  }

  async renderMovieDetails() {
    const getId = this.state.id.split(':');
    const id = getId[1];    
    const movieDetailAPI = await movieAPI.getMovie(id);
    
    this.setState({
      loading: false,
      movie: movieDetailAPI,
    });
  }
  componentDidMount() {
    this.renderMovieDetails();
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const loadingMovieDetail = <span><Loading/></span>
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    
    if (this.state.loading) {
      return loadingMovieDetail;
    } else {

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>

      </div>
    );
  }
}
}

export default MovieDetails;
