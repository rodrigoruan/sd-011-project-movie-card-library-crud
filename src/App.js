import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>

      <header>
        Movie Card Library CRUD
      </header>

      <Route exact path="/" component={ MovieList } />
      <Route path="movies/new" component={ NewMovie } />
      <Route path="movies/:id" component={ MovieDetails } />
      <Route path="movies/:id/edit" component={ EditMovie } />
      <Route component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
