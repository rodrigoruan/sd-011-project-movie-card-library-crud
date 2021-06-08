import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/" component={ NotFound } />
      </BrowserRouter>
    </>
  );
}

// <Route to="/movies/:id" component={ MovieDetails } />

export default App;
