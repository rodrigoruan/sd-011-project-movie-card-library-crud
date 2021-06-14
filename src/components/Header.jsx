import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img
            className="header-logo"
            src="images/Logo.png"
            alt="Logo do React em tamanho pequeno"
          />
        </Link>

        <Link to="/movies/new" className="new-movie">ADICIONAR CARTÃO</Link>
      </header>
    );
  }
}

export default Header;
