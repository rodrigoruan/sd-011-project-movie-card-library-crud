import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import { MovieList, NewMovie, EditMovie, NotFound } from './pages';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <Switch>
          <Route exact path="/" render={ () => <MovieList /> } />
          <Route path="/movies/new" render={ () => <NewMovie /> } />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route path="/movies/:id/" render={ (props) => <EditMovie { ...props } /> } />
          <Route NoMatch render={ () => <NotFound /> } />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
