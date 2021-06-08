import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route path="/notfound" component={ NotFound } />
          <Route exact path="/" component={ MovieList } />
          <Route render={ () => <Redirect to={ { pathname: '/notfound' } } /> } />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
