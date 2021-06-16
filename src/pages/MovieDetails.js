import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom'

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
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img src={ `../${imagePath}` } alt='Movie Cover'/>
        <h2>{title}</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={`/movies/${movie.id}/edit`}>EDITAR</Link>
        <Link to={"/"}>VOLTAR</Link>
      </div>
    )
  }

  componentDidMount() {
    this.fecthApi();    
  }

  render() {
    const { loading } = this.state;


    return (
      <>
        {loading ? <Loading /> : this.renderDetails() }
      </>
    );
  }
}

export default MovieDetails;
