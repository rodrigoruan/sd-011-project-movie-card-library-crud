import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route NoMatch component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
