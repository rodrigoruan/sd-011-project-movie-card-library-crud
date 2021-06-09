import React, { Component }from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';

class App extends Component {
  render(){
    return (
        <div>
          <h1>Movie Card Library CRUD</h1>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component= {MovieList}/>
              <Route path="/movies/new" component= {NewMovie}/>
              <Route exact path="/movies/:id" component= {MovieDetails}/>
              <Route path="/movies/:id/edit" component= {EditMovie}/>
              <Route path="*" component= {NotFound}/>
            </Switch>
          </BrowserRouter>
        </div>
      );
  }
}


export default App;
