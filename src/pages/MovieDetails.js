import React, { Component } from 'react';
import Loading from '../components/Loading'
import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
  super(props);

  this.state = {
    movieID: undefined,
    movie: [],
    loading: true,
  };

  this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  async getMovieDetails() {
    const movieGot = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      movie: movieGot,
      loading: false
      })
  }
  
  componentDidMount() {
    this.getMovieDetails();
  }


  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { loading } = this.state;
    const { id } = this.props.match.params;
    if (loading) return <Loading />
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${title}` }</p>
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
