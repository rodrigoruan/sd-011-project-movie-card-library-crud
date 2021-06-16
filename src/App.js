import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path='/' component={ MovieList } />
        <Route path='/movies/new' component={ NewMovie } />
        <Route path='/movies/:id' component={ MovieDetails } />
        <Route path='/movies/:id/edit' component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
