import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  EditMovie,
  MovieDetails,
  MovieList,
  NewMovie,
  NotFound,
} from './pages/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route
          exact
          path="/movies/:id/edit"
          render={ (matchProps) => <EditMovie { ...matchProps } /> }
        />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
