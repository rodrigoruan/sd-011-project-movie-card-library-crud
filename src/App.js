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
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route path="/movies/new" render={ () => <NewMovie /> } />
        <Route
          exact path="/movies/:id"
          render={
            (props) => <MovieDetails { ...props } />
          }
        />
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route path="*" render={ () => <NotFound /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
