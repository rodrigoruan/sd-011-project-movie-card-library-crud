import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NewMovie, EditMovie, MovieDetails, MovieList, NotFound } from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}
// Req.1 - BrowserRouter agora chama Router. Utilizado para criar as rotas. Route vai mapear as rotas e o Switch vai encapsular todas as rotas.

export default App;
