import React from 'react';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie'
import MovieList from './pages/MovieList'
import NotFound from './pages/NotFound'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
 <Route path="/" component={MovieList}/>
 <Route path="/movies/new" component={NewMovie}/>
 <Route path="/movies/:id" component={MovieDetails}/>
 <Route path="/movies/:id/edit" component={EditMovie}/>
 <Route path='*' component={NotFound} />
 </BrowserRouter>
    
  );
}

export default App;
