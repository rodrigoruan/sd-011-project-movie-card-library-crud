import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NewMovie, NotFound, MovieList, MovieDetails, EditMovie } from './pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav />

          <Switch>
            <Route exact path="/" component={ MovieList } />
            <Route exact path="/movies/new" component={ NewMovie } />
            <Route exact path="/movies/:id" component={ MovieDetails } />
            <Route exact path="/movies/:id/edit" component={ EditMovie } />
            <Route default component={ NotFound } />

          </Switch>

        </div>

      </BrowserRouter>
    );
  }
}

export default App;
