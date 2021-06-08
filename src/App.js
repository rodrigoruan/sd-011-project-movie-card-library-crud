import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Route exact to="/" component={ MovieList } />
      <Route to="/movies/new" component={ NewMovie } />
      <Route to="/movies/:id" component={ MovieDetails } />
      <Route to="/movies/:id/edit" component={ EditMovie } />
      <Route to="" component={ NotFound } />
      <div>Movie Card Library CRUD</div>
    </BrowserRouter>
  );
}

export default App;
