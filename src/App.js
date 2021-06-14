import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      Movie Card Library CRUD
      <Link data-testid="new-movie" to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" exact component={ NewMovie } />
        <Route
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route path="*" render={ () => <NotFound /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
