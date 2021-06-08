import React, { Component } from 'react';
// import MovieList from '../pages/MovieList';

class Loading extends Component {
  constructor() {
    super();
    this.state = {
      loadingMessage: 'Carregando...',
      verify: false,
    };
    this.handleLoading = this.handleLoading.bind(this);
  }

  componentDidMount() {
    this.handleLoading();
  }

  handleLoading() {
    const timer = 2000;
    setTimeout(() => {
      this.setState({
        loadingMessage: '',
        verify: true,
      });
    }, timer);
  }

  render() {
    const { loadingMessage, verify } = this.state;
    if (verify) {
      return (
        <div>
          {/* <MovieList /> */}
        </div>
      );
    }
    return (
      <div>
        { loadingMessage }
      </div>
    );
  }
}

export default Loading;
