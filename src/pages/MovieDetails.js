import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      storyline:'',
      subtitle:'',
      genre:'action',
      rating: 0,
      imagePath:'',
      loading: true,
    };

  }

  componentDidMount() {
    const {id} = this.props.match.params;

    movieAPI.getMovie(id)
      .then(({subtitle,storyline,genre,rating,imagePath}) => {
        this.setState({ subtitle,storyline,genre,rating,imagePath, loading: false });
      })
      .catch((err) => console.error(err));
  } 

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const {subtitle,storyline,genre,rating,imagePath} = this.state
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

export default MovieDetails;
