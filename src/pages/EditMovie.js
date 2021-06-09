import React, { Component } from 'react';
import { Loading } from '../components';
import { MovieForm } from '../components';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      id:0, 
      movie: {},
      load: true,
      submitted: false
    };
    this.getMovieData = this.getMovieData.bind(this);
    this.renderMovieEdit = this.renderMovieEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  renderMovieEdit() {
    const { movie } = this.state;
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ submitted: true});
  }

  componentDidMount() {
    this.getMovieData();
  }

  render() {
    const { load, submitted } = this.state;
    const loadingComponent = <Loading />;
    const movieEditComponent = this.renderMovieEdit();
    const editPage = load ? loadingComponent : movieEditComponent;
    const homePage = <Redirect to="/" />;

    return (
      <div>
        { submitted ? homePage : editPage }
      </div>
    );
  }
}

export default EditMovie;
