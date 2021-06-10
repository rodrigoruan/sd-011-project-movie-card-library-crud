import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie } from './pages/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          path="/movies/:id"
          render={ ({ match }) => <MovieDetails id={ match.params.id } /> }
        />
        <Route
          path="/movies/:id/edit"
          render={ ({ match }) => <EditMovie id={ match.params.id } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
