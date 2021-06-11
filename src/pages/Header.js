import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <Link className="page-title" to="/">Movie Cards Library</Link>
      </header>
    );
  }
}

export default Header;
