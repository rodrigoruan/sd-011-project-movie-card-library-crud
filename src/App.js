import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MovieDetails, MovieList, NewMovie, NotFound, EditMovie } from './pages';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="*" exact={ true } component={ NotFound } />
      </BrowserRouter>
    </div>
  );
}

export default App;
