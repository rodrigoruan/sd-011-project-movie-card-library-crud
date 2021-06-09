import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, EditMovie, MovieDetails, NotFound, NewMovie } from './pages';

function App() {
  return (
    <div>
      Movie Card Library CRUD
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route path="*" component={ NotFound } />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
