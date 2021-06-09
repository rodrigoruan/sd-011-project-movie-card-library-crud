import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import MovieList from './pages/MovieList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route path="/movies/new" render={ () => <NewMovie /> } />
        <Route exact path="/movies/:id" render={ (props) => <MovieDetails {...props} /> } />
        <Route exact path="/movies/:id/edit" render={ () => <EditMovie /> } />
        <Route path="/*" render={ () => <NotFound /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
