import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      genre: '',
      rating: 0,
    };
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    const { match } = this.props;
    const idMovie = match.params.id;
    this.setState({
      loading: true,
    },
    () => {
      movieAPI.getMovie(idMovie)
        .then((resolve) => {
          this.setState({
            title: resolve.title,
            subtitle: resolve.subtitle,
            storyline: resolve.storyline,
            imagePath: resolve.imagePath,
            genre: resolve.genre,
            rating: resolve.rating,
            loading: false,
          });
        });
    });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, loading } = this.state;
    if (loading === true) {
      return (<Loading />);
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
