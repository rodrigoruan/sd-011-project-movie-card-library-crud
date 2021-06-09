import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <div>Movie Card Library CRUD</div>
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
        <Route exact path="/" component={ MovieList } />
        <Route component={ NotFound } />
      </Router>
    </BrowserRouter>
  );
}

export default App;
