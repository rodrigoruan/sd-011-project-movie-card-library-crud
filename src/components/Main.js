import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewMovie from '../pages/NewMovie';
import MovieDetails from '../pages/MovieDetails';
import EditMovie from '../pages/EditMovie';
import NotFound from '../pages/NotFound';
import MovieList from '../pages/MovieList';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default Main;
