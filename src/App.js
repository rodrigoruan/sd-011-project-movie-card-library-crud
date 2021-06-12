import React from 'react';
import { MainRouter, Switch, Router } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <MainRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Router path="/" component={ MovieList } />
        <Router path="/movies/new" component={ NewMovie } />
        <Router path="/movies/:id/edit" component={ EditMovie } />
        <Router cpath="/movies/:id" component={ MovieDetails } />
        <Router component={ NotFound } />
      </Switch>
    </MainRouter>
  );
}

export default App;
