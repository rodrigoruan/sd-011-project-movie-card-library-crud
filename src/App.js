import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1 className="page-title movie-card-header">
          Movie Card Library CRUD
        </h1>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
