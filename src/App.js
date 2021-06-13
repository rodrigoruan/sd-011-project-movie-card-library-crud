import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" />
        <Route path="/movies/new" />
        <Route path="/movies/:id" />
        <Route path="/movies/:id/edit" />
        <Route path="*" />
      </Switch>
    </Router>
  );
}

export default App;
