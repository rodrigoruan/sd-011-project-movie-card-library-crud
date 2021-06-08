import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/new" component={ NewMovie } />
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route exact path="/">
            <MovieList />
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </Route>
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
