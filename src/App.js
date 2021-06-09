import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        Movie Card Library CRUD
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
