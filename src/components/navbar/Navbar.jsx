import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./navbar.scss";
import {Navbar, Nav, MenuItem, NavDropdown, NavItem} from 'react-bootstrap';

export default class ClassName extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Bloomtime Design</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Login
          </NavItem>
          <NavItem eventKey={2} href="#">
            Signup
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
