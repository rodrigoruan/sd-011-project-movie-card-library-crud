import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import MovieList from './pages/MovieList';
import './App.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <MovieList /> } />
          <Route path="/movies/new" render={ () => <NewMovie /> } />
          <Route exact path="/movies/:id" render={ () => <MovieDetails /> } />
          <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
          <Route path="/*" render={ () => <NotFound /> } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
