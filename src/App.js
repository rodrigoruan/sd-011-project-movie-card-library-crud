import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/new" exact>
          <NewMovie />
        </Route>
        <Route path="/movies/:id" exact>
          <MovieDetails />
        </Route>
        <Route path="/movies/:id/edit" exact>
          <EditMovie />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
