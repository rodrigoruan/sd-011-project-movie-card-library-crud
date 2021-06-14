import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route path="/movies/new" render={ () => <NewMovie /> } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route
          exact
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route path="*" render={ () => <NotFound /> } />
      </Switch>
    </Router>
  );
}

export default App;
