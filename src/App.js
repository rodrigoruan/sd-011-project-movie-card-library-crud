import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, EditMovie, NewMovie, NotFound } from './pages';

function App() {
  return (
    <main>
      <BrowserRouter>
        <h1>Movie Card Library CRUD</h1>
        <Switch>
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/" component={ MovieList } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
