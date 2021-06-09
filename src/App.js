import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
