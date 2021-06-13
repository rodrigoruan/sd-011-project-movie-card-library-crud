import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

/*
Projeto Movie Library CRUD
Componente App.js
 -> Aqui começa o trabalho requisito 1 ele pede para que renderizemos o BrowserRouter, detro de um switch colocar as rotas referentes a alguns componentes do projeto (EditMovie, NewMovie, MovieDetails e Home que no caso seria o MovieList) e uma rota para caso nenhum desse caminhos sejam informados pela URL ({ NotFound })
 -> No requisito 6 é pedido para adicionar um link na home (MovieList) que redireciona para o formulario para adiconar um novo filme
*/
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MovieList />
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </Route>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
