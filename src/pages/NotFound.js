import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div className="containerLoading" data-testid="404-error">
        <h1>Página não encontrada</h1>
        <Link className="button" to="/"> Página Inicial </Link>
      </div>
    );
  }
}

export default NotFound;
