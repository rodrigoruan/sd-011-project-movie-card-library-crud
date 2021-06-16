import React, { Component } from 'react';

import { MovieForm } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      status: 'loading',
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    movieAPI.getMovie(id)
      .then((movie) => {
        if (this.mounted) {
          this.setState({ movie, status: 'loaded' });
        }
      })
      .catch((err) => console.error(err));
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => {
        if (this.mounted) {
          this.setState({ shouldRedirect: true });
        }
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { movie } = this.state;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
