import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div ClassName="loading">
        <p>Carregando...</p>
        <img src="https://cdn.dribbble.com/users/1053052/screenshots/3600670/_____.gif" alt="loading gif"></img>
      </div>
    );
  }
}

export default Loading;
