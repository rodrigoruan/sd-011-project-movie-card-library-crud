import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound }from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
