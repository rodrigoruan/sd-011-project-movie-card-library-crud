import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>Movie Card Library CRUD</div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ MovieList } />
            <Route path="/movies/new" component={ NewMovie } />
            <Route exact path="/movies/:id" component={ MovieDetails } />
            <Route path="/movies/:id/edit" component={ EditMovie } />
            <Route path="" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
