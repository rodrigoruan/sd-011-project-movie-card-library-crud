import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  renderRoutes() {
    return (
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Movie Card Library CRUD</h1>
          <nav>
            <Link className="link" to="/"> Home </Link>
          </nav>
          {this.renderRoutes()}
        </div>
      </Router>
    );
  }
}

export default App;
