import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Loading } from '../components';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      loading: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this)
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

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => {
      this.setState({ shouldRedirect: true });
    });
  }

  renderForm() {
    const { title, storyline, imagePath, genre, subtitle } = this.state.movie;
    return (
      <div data-testid="edit-movie">
        <form>
          <label htmlFor="">Título
            <input type="text" value={title} />
          </label>
          <label htmlFor="">Subtítulo
            <input value={subtitle} type="text" />
          </label>
          <label htmlFor="">Imagem
            <input value={imagePath} type="text" />
          </label>
          <label htmlFor="">Sinopse
            <textarea value={storyline} name="" id="" cols="30" rows="10"></textarea>
          </label>
          <select name="" id="" value={genre}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </form>
        <div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovie(id);
  }

  render() {
    const { status, shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />
    }

    return (
      <div data-testid="edit-movie">
        {loading
          ? <Loading />
          :<MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
      </div>
    );
  }
}

export default EditMovie;
