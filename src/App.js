import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './css/Crud.css';

function App() {
  return (
    <main>
      <h1 className="title-crud">Movie Card Library CRUD</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route path="*" component={ NotFound } />
        </Switch>
        <Link to="/movies/new" className="add-cart">ADICIONAR FILME</Link>
      </BrowserRouter>
    </main>
  );
}

export default App;
