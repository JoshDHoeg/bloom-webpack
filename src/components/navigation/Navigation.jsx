import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import style from "./navigation.scss";
import {Navbar, Nav, MenuItem, NavDropdown, NavItem} from 'react-bootstrap';
import SignOutButton from './../../routes/users/signout/SignOut.jsx';

import * as ROUTES from './../../constants/routes.js';

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem>
        <Link to={ROUTES.LOG_IN}>Login</Link>
      </NavItem>
      <NavItem>
        <Link to={ROUTES.SIGN_UP}>Signup</Link>
      </NavItem>
      <NavItem>
        <li>
          <SignOutButton />
        </li>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
