import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, NewMovie, MovieList, NotFound } from './pages';

function App() {
  return (
    <main>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/" component={ MovieList } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
