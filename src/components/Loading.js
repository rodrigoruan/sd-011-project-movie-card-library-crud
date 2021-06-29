import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loading">Carregando...</div>
        <div className="loading-circle" />
      </div>
    );
  }
}

export default Loading;
