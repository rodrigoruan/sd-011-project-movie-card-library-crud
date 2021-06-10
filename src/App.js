import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Header from './pages/Header';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="add-new-card">
          <Link className="add-new-card-link" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <Switch>
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="/movies/new" render={ () => <NewMovie /> } />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route exact path="/" render={ () => <MovieList /> } />
          <Route path="*" render={ () => <NotFound /> } />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
