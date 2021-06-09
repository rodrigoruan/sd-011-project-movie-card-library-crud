import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { MovieForm } from '../components'; // acrescentar o loading depois
// import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      shouldRedirect: false,
      // status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.handleSubmit(updatedMovie);
  // }

  handleSubmit(updatedMovie) {
    console.log(updatedMovie);
    // const editedMovie = await movieAPI.updateMovie(updatedMovie);
    // this.setState({
    //   shouldRedirect: true,
    //   movie: editedMovie,
    // });
  }

  // getMovies1(){

  // }

  // catchEditedMovie() {
  //   const {match: {params: {id} } } = this.props;
  // }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
      // return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
