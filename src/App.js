import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route path="/movies/new" render={ () => <NewMovie /> } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route path="*" render={ () => <NotFound /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
