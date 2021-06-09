import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar" fixed="top" sticky="top" bg="dark" expand="lg" variant="dark">
          <Navbar.Brand className="navbar-brand" href="/">
            Movie Card Library CRUD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="lead " href="/">
                Home
              </Nav.Link>
              <Nav.Link className="lead" href="/movies/new">
                Add Cart
              </Nav.Link>
              <Nav.Link className="lead " href="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
