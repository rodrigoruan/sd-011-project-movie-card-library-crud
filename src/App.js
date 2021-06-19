import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages/index';
import { Header, Footer } from './components/index';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ MovieList } />
            <Route exact path="/movies/new" component={ NewMovie } />
            <Route
              exact
              path="/movies/:id"
              render={ (props) => <MovieDetails { ...props } /> }
            />
            <Route
              exact
              path="/movies/:id/edit"
              render={ (props) => <EditMovie { ...props } /> }
            />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
