import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { EditMovie, MovieDetails, NewMovie, MovieList, NotFound } from './pages';

function App() {
  return (
    <Switch>
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="*" component={ NotFound } />
      </BrowserRouter>
    </Switch>
  );
}

export default App;
