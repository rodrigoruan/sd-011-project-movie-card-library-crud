import React from 'react';
import { BroserRouter, Route } from 'react-router-dom';
import MoveList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div>
      <BroserRouter>
        <Route exact path="/" component={ <MoveList /> } />
        <Route exact path="/movies/new" component={ <NewMovie /> } />
        <Route exact path="/movies/:id" component={ <MovieDetails /> } />
      </BroserRouter>
    </div>
  );
}

export default App;
