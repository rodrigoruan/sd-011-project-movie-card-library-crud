import React, { Component } from 'react';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
  }

  renderEdit = () => {
    const { id } = this.props.match.params;
    this.setState({ status: 'loading' }, async () => {
      const newMovie = await movieAPI.getMovie(id);
      this.setState({ movie: newMovie, status: false });
    });
  };

  componentDidMount() {
    this.renderEdit();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => {
      this.setState({ shouldRedirect: true });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
