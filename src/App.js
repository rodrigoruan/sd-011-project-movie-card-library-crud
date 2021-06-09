import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <div>Movie Card Library CRUD</div>
        <BrowserRouter>
          <Route
            exact
            path="/"
            component={ MovieList }
          />
          <Route
            path="/movies/new"
            component={ NewMovie }
          />
          <Route
            path="/movies/:id"
          />
          <Route
            path="/movies/:id/edit"
          />
          <Route component={ NotFound } />
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
