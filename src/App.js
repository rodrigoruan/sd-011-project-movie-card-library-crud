import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { NewMovie, MovieDetails, EditMovie, MovieList, NotFound } from './pages';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <span>
        <Link to="/movies/new">New Movie</Link>
      </span>
      <span>
        <Link to="/movies/:id">Movie Details</Link>
      </span>
      <span>
        <Link to="/movies/:id/edit">Movie Edit</Link>
      </span>
      <span>
        <Link to="/">Return to Main</Link>
      </span>

      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="" component={ NotFound } />
      </Switch>

    </Router>
  );
}

export default App;
