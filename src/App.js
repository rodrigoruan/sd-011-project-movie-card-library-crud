import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>Movie Card Library CRUD</div>
        <Router>
          <Switch>
            <Route exact path="/" component={ MovieList } />
            <Route exact path="/movies/new" component={ NewMovie } />
            <Route exact path="/movies/:id" component={ MovieDetails } />
            <Route exact path="/movies/:id/edit" component={ EditMovie } />
            {/* Para fazer a implementação do not found, foi consultado um tópico no
            * StackOverFlor sobre React Router Not Found Method
            * Source: https://stackoverflow.com/questions/32128978/react-router-no-not-found-route  */}
            <Route exact path="*" component={ NotFound } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
