import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          <Switch>
            <Route exact path="/" render={ () => <MovieList /> } />
            <Route exact path="/movies/new" render={ () => <NewMovie /> } />
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
            <Route path="*" component={ NotFound } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
