import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => (<MovieList />) } />
        <Route path="/movies/new" render={ () => (<NewMovie />) } />
        <Route exact path="/movies/:id" render={ () => (<MovieDetails />) } />
        <Route path="/movies/:id/edit" render={ () => (<EditMovie />) } />
        <Route path="*" render={ () => (<NotFound />) } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
