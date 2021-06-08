import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      Movie Card Library CRUD
      <BrowserRouter>
        <Switch>
          <Route path="/movies/new" render={ () => <NewMovie /> } />
          <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
          <Route path="/movies/:id" render={ () => <MovieDetails /> } />
          <Route exact path="/" render={ () => <MovieList /> } />
          <Route NoMatch render={ () => <NotFound /> } />
        </Switch>
      </BrowserRouter>
    </div>   
  );
}

export default App;
