import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route path="/movies/new">
          <NewMovie />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
          <Route
            path="/movies/:id/edit"
            render={ (props) => (<EditMovie { ...props } />) }
          />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
