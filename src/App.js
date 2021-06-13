import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <BrowserRouter exact path="/" component={ MovieList } />
        <BrowserRouter path="/movies/new" component={ NewMovie } />
        <BrowserRouter path="/movies/:id" component={ MovieDetails } />
        <BrowserRouter path="/movies/:id/edit" component={ EditMovie } />
        <BrowserRouter path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
