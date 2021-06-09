import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      title: '',
      subtitle: '',
      storyline:'',
      imagePath: '',
      genre: '',
      rating: 0,
    }
    this.getMovie = this.getMovie.bind(this);
  }

  getMovie() {
    const { match } = this.props;
    const idMovie = match.params.id;
    this.setState({
      loading: true,
    }, 
    () => {
      movieAPI.getMovie(idMovie)
      .then(resolve => {
        this.setState({
          title: resolve.title,
          subtitle: resolve.subtitle,
          storyline: resolve.storyline,
          imagePath: resolve.imagePath,
          genre: resolve.genre,
          rating: resolve.rating,
          loading:false,
        })
      })
    })
  }

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, loading} = this.state;
    if (loading === true) {
     return ( <Loading /> )
    } else {
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
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
