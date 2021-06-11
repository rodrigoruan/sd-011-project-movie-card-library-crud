import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

// Passo 1 - O BrowserRouter foi utilizado como Router, esse componente encapsula a aplicação e permite a utilização de rotas (path/ component).
function App() {
  return (
    <Router>
      <h1>Movie Card Library CRUD</h1>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  ); // O Switch encapsula (estrutura e organiza) um conjunto de rotas. O exact passa o caminho EXATO.
}

export default App;
