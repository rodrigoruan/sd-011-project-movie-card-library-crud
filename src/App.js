import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import { About, NewMovie, NotFound, EditMovie, MovieList, Footer } from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" render={(props) => <MovieList {...props} />} />
          <Route exact path="/movies/new" render={(props) => <NewMovie {...props} />} />
          <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
