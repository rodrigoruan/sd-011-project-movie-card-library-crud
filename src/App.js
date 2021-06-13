import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Movie Card Library | CRUD</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
