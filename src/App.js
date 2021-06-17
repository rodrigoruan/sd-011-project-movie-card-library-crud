import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';
import './App.css';

class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><MovieList/></Route>
          <Route exact path="/movies/new"><NewMovie/></Route>
          <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />}></Route>
          <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />}></Route>
          <Route path="*"><NotFound/></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
