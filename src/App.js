import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={ () => <MovieList /> } />
        <Route path="/movies/new" render={ () => <NewMovie /> } />
        <Route exact path="/movies/:id" render={ () => <MovieDetails /> } />
        <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
        <Route path="/404" render={ () => <NotFound /> } />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
