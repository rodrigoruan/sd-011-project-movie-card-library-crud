import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
        <Route path="/movies/new" render={ () => <NewMovie /> } />
        <Route path="/movies/:id" render={ () => <MovieDetails /> } />
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route path="*" render={ () => <NotFound /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
