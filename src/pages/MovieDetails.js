import React, { Component } from 'react';
import Loading from './components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: {},
    };
    this.listaMovie = this.listaMovie.bind(this);
  }

  componentDidMount() {
    this.listaMovie();
  }

  listaMovie = async () => {
    const filme = await movieAPI.getMovie(); // parametro de getmovie e a url que e o id
    this.setState({ movie: filme, loading: false });
  }

  render() {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    console.log(imagePath);
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <div>{ `title: ${title}` }</div>
        <div>{ `Subtitle: ${subtitle}` }</div>
        <div>{ `Storyline: ${storyline}` }</div>
        <div>{ `Genre: ${genre}` }</div>
        <div>{ `Rating: ${rating}` }</div>
      </div>
    );
  }
}

export default MovieDetails;
