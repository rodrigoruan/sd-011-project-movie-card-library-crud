import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Router>
          <div>Movie Card Library CRUD</div>
          <MovieList />
          <NewMovie />
          <MovieDetails />
          <EditMovie />
          <NotFound />
        </Router>
      </BrowserRouter>
    );
  }
}

export default App;
