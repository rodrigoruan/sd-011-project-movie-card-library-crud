import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom'

class MovieDetails extends Component {
  constructor(props){
    super(props)
    this.state ={
      loading: false,
      movie: [],
    }
    this.fetchMovie = this.fetchMovie.bind(this)
    this.renderMovie = this.renderMovie.bind(this)
  }

  async fetchMovie(id) {
    this.setState({ 
      loading: true
      },
      async () => {
        const data = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: data,
        })  
      }
    )
  }

  renderMovie() {
    
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    return (
      <div data-testid="movie-details">
      <img alt="Movie Cover" src={ `../${imagePath}` } />
      <p>{ `Subtitle: ${title}` }</p>
      <p>{ `Subtitle: ${subtitle}` }</p>
      <p>{ `Storyline: ${storyline}` }</p>
      <p>{ `Genre: ${genre}` }</p>
      <p>{ `Rating: ${rating}` }</p>
    </div>
    )
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    this.fetchMovie(id);
  }
  
  render() {
    const { loading } = this.state;
    return (
      <div>
        <div>{loading
          ? <Loading />
          : this.renderMovie()}
        </div>
        <Link to='/'>VOLTAR</Link>
        <Link to={`/movies/${this.props.match.params.id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
