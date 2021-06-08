import React from 'react';
import { BroserRouter, Route } from 'react-router-dom';
import MoveList from './pages/MovieList';

function App() {
  return (
    <div>
      <BroserRouter>
        <Route exact path="/" component={ <MoveList /> } />
      </BroserRouter>
    </div>
  );
}

export default App;
