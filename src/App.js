import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import { MovieList, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <div>
      Movie Card Library CRUD
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <MovieList /> } />
          <Route path="/movies/new" render={ () => <NewMovie /> } />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route path="/movies/:id/" render={ (props) => <EditMovie { ...props } /> } />
          <Route NoMatch render={ () => <NotFound /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
