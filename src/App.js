import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <h1>Movie Card Library CRUD</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/new" render={() => <NewMovie />} />
          <Route exact path="/movies/:id" render={() => <MovieDetails />} />
          <Route path="/movies/:id/edit" render={() => <EditMovie />} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
