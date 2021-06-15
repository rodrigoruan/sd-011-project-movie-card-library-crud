import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';
import './App.css';

class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
          <Route path="/"><MovieList/></Route>
          <Route path="/movies/new"><NewMovie/></Route>
          <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />}></Route>
          <Route path="/movies/:id/edit"><EditMovie/></Route>
          <Route path="*"><NotFound/></Route>
      </BrowserRouter>
    );
  }
}

export default App;
