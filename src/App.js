import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="page-title">Movie Card Library CRUD</div>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <MovieList /> }
        />
        <Route
          path="/movies/new"
          render={ () => <NewMovie /> }
        />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route
          path="*"
          render={ () => <NotFound /> }
        />
      </Switch>
      <button type="button">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </button>
    </BrowserRouter>
  );
}

export default App;
