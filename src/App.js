import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
import MovieList from './pages/MovieList';
import NewMovies from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Router exact path="/" render={ () => <MovieList /> } />
      <Router path="/movies/new" render={ () => <NewMovies /> } />
      <Router path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
      <Router path="*" component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
