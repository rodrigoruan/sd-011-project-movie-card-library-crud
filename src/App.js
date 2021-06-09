import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="title">Movie Card Library CRUD</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <MovieList /> } />
          <Route path="/movies/new" render={ () => <NewMovie /> } />
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route path="*" render={ () => <NotFound /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
