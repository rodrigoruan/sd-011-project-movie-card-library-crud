import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
          <Route exact path="/" render={ () => <MovieList /> } />
          <Route exact path="/movies/new" render={ () => <NewMovie /> } />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id/edit"
            render={ (matchProps) => <EditMovie { ...matchProps } /> }
          />
          <Route component={ NotFound } />
          {/* https://www.codegrepper.com/code-examples/javascript/redirect+to+404+if+page+not+exist+react */}
          {/* Se nenhum path existir retorna o componente NotFound */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
