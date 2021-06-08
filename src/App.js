import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={ MovieList } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route component={ NotFound } />
      </Switch>
      <div>Movie Card Library CRUD</div>
    </BrowserRouter>
  );
}

export default App;
