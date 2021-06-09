import React, { Component } from 'react';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
// import MovieList from './MovieList';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getEditMovie = this.getEditMovie.bind(this);
    this.returnHome = this.returnHome.bind(this);
    console.log(props);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then((resolve) => {
        this.setState({
          shouldRedirect: true,
        })
      })
  }

  componentDidMount() {
    this.getEditMovie();
  }

  returnHome() {
    const { history } = this.props;
    history.push('/');
  }

  getEditMovie() {
    const { match } = this.props;
    const idMovie = match.params.id
    this.setState({
      status: 'loading',
    }, () => {
     movieAPI.getMovie(idMovie)
      .then((resolve) => {
        this.setState({
          movie: resolve,
          status: '',
        });
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
     this.returnHome();
    }

    if (status === 'loading') {
     return <Loading />
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
