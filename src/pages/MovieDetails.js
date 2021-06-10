import React, { Component } from 'react';
import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();
    
    this.state = {
      movie: {}
    }
  }
  
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState(
      { loading: true },
      async () => {
      this.setState({
        movie: await getMovie(id),
        loading: false,
      })
      }
    )
  }

  render() {
    const { movie, loading } = this.state;
    const { id } = this.props.match.params;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading === true) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
