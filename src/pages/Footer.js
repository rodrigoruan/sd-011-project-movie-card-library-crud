import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <Navbar fixed="bottom" variant="dark" bg="dark" className="footer" sticky="bottom">
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <Nav className="mr-auto">
            <Nav.Link className="lead" href="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link className="lead" href="https://github.com/imphassis/">
              GitHub
            </Nav.Link>{' '}
          </Nav>
        </div>
      </Navbar>
    );
  }
}
