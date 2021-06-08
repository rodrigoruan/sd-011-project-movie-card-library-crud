import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewMovie from './NewMovie';
import MovieDetails from './MovieDetails';
import EditMovie from './EditMovie';
import MovieList from './MovieList';
import NotFound from './NotFound';

class Home extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route
            exact
            path="/movies/new"
            render={ (props) => <NewMovie { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route component={ NotFound } />
        </Switch>
      </div>
    );
  }
}
export default Home;
