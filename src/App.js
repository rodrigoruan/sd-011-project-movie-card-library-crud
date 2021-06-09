import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ MovieList } />
        <Route path="/movies/new" exact component={ NewMovie } />
        <Route path="/movies/:id" exact component={ MovieDetails } />
        <Route path="/movies/:id/edit" exact component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
