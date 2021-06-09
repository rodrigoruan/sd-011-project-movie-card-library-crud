import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      movie: {},
      load: true,
    };

    this.getMovieData = this.getMovieData.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
  }

  async getMovieData() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({ 
      id: id,
      movie: movie,
      load: false
    });
  }
  
  renderMovie() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <h1>{ title }</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  componentDidMount() {
    this.getMovieData();
  }

  render() {

    const { load, id } = this.state;
    const loadingComponent = <Loading />;
    const movieComponent = this.renderMovie();
    const editPath = `/movies/${id}/edit`;

    return (
      <div>
        { load ? loadingComponent : movieComponent }
        <Link to="/" >VOLTAR</Link>
        <Link to={ editPath } >EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
