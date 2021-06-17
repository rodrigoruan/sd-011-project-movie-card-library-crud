import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
