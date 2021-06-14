import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Link data-testid="new-movie" to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route path="/" exact component={ MovieList } />
        <Route path="/movies/new" exact component={ NewMovie } />
        <Route
          path="/movies/:id"
          exact
          component={ MovieDetails }
        />
        <Route
          path="/movies/:id/edit"
          exact
          component={ EditMovie }
        />
        <Route path="*" render={ () => <NotFound /> } />
      </Switch>
    </Router>
  );
}

export default App;
