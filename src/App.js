import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id/edit"
          render={ () => <EditMovie /> }
        />
        <Route
          exact
          path="/movies/:id"
          render={ () => <MovieDetails /> }
        />
        <Route exact path="/" component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
