import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MovieList}/>
        <Route path="/movies/new" exact component={NewMovie}/>
        <Route path="/movies/:id" exact render={(props) => <MovieDetails {...props} />}/>
        <Route path="/movies/:id/edit" exact render={(props) => <EditMovie {...props} />}/>
        <Route path="" component={NotFound}/>
      </Switch>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
    </BrowserRouter>
  );
}

export default App;
