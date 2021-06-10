import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route
          exact
          path="/"
          component={ MovieList }
        />
        <Route
          exact
          path="/movies/new"
          render={ () => <NewMovie /> }
        />
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
        <Route
          exact
          path="/movies/new"
          render={ () => <NewMovie /> }
        />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
