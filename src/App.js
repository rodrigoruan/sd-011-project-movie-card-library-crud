import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, EditMovie, NewMovie, MovieDetails, NotFound } from './pages/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <div>Movie Card Library CRUD</div>
      </header>
      <div className="content">
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
