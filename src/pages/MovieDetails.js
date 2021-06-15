import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: [],
    };
    this.fecthApi = this.fecthApi.bind(this)
    this.renderDetails = this.renderDetails.bind(this)
  }
  
  async fecthApi() {
    const {id} = this.props.match.params
    this.setState(
      { loading: true },
      async () => {
      this.setState({
          loading: false,
          movie: await movieAPI.getMovie(id)
        });
      });
  }

  renderDetails(){
    const { movie } = this.state
    const { storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </>
    )
  }

  componentDidMount() {
    this.fecthApi();    
  }

  render() {
    const { loading } = this.state;


    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : this.renderDetails() }
      </div>
    );
  }
}

export default MovieDetails;
