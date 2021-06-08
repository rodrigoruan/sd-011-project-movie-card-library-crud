import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MovieList, NewMovie, EditMovie, MovieDetails, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ MovieList } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
