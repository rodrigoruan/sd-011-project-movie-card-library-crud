import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
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
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.fetchMovie(id);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => {
      this.setState({ shouldRedirect: true });
    });
  }

  async fetchMovie(id) {
    this.setState({
      loading: true,
    },
    async () => {
      const data = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie: data,
      });
    });
  }

  renderForm() {
    const { title, storyline, imagePath, genre, subtitle } = this.state;
    return (
      <div data-testid="edit-movie">
        <form>
          <label htmlFor="title">
            Título
            <input id="title" type="text" value={ title } />
          </label>
          <label htmlFor="subtitle">
            Subtítulo
            <input value={ subtitle } id="subtitle" type="text" />
          </label>
          <label htmlFor="image">
            Imagem
            <input value={ imagePath } id="image" type="text" />
          </label>
          <label htmlFor="storyline">
            Sinopse
            <textarea value={ storyline } name="" id="storyline" cols="30" rows="10" />
          </label>
          <select name="" id="" value={ genre }>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </form>
        <div />
      </div>
    );
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        {loading
          ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
      </div>
    );
  }
}

export default EditMovie;
EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
