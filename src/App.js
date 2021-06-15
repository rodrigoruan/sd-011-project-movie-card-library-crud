import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path='/' render={ () => <MovieList/> } />
        <Route exact path='/movies/new' render={ () => <NewMovie /> } />
        <Route exact path='/movies/:id' render={ () => <MovieDetails /> } />
        <Route exact path='/movies/:id/edit' render={ () => <EditMovie/> } />
        <Route NoMatch render={ () => <NotFound/> }/>
      </Switch>
    </Router>
  );
}

export default App;
