import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
      <div>
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
