import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <h1>Movie Card Library CRUD</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => (<MovieList />) } />
          <Route path="/movies/new" render={ () => (<NewMovie />) } />
          <Route exact path="/movies/:id" render={ () => (<MovieDetails />) } />
          {' '}
          {/* rota dinâmica, usa-se exact */}
          <Route exact path="/movies/:id/edit" render={ () => (<EditMovie />) } />
          {' '}
          {/* rota dinâmica, usa-se exact */}
          <Route component={ NotFound } />
          {' '}
          {/* caso não encontre alguma página, retona not found */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
