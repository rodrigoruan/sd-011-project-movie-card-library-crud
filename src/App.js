import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieList from './pages/MovieList';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ MovieList } />
    </Router>
  );
}

export default App;
