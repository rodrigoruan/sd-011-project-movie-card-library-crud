import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/movies/new">
          <NewMovie />
        </Route>
        <Route exact path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route exact path="/movies/:id/edit">
          <EditMovie />
        </Route>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
