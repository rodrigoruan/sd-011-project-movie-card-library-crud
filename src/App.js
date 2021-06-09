import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
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
          {/* rota dinâmica, pois tem um id, usa-se exact */}
          <Route
            exact
            path="/movies/:id"
            render={ (props) => (<MovieDetails { ...props } />) }
          />
          {/* rota dinâmica, pois tem um id, usa-se exact */}
          <Route
            exact
            path="/movies/:id/edit"
            render={ (props) => (<EditMovie { ...props } />) }
          />
          {/* caso não encontre alguma página, retona not found */}
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
