import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from '.';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/movies/new" component={ NewMovie } />
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
          <Route exact path="/" component={ MovieList } />
          <Route path="/*" component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default Home;
