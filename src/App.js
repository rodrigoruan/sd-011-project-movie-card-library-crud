import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';
import './App.css';

class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
          <Router path="/"><MovieList/></Router>
          <Router path="/movies/new"><NewMovie/></Router>
          <Router path="/movies/:id"><MovieDetails/></Router>
          <Router path="/movies/:id/edit"><EditMovie/></Router>
          <Router path="*"><NotFound/></Router>
      </BrowserRouter>
    );
  }
}

export default App;
