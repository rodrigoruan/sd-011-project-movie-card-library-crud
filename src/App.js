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
      <Route path="/movies/new">
        <NewMovie />
      </Route>
      <Route path="/movies/:id">
        <MovieDetails />
      </Route>
      <Route path="/movies/:id/edit">
        <EditMovie />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
      <Route path="/">
        <MovieList />
      </Route>
    </Router>
  );
}

export default App;
