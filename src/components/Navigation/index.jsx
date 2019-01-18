import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import style from "./style.scss";
import {Navbar, Nav, MenuItem, NavDropdown, NavItem} from 'react-bootstrap';
import SignOutButton from './../../routes/users/Signout/index.jsx';

import * as ROUTES from './../../utils/constants/routes.js';
import { AuthUserContext } from './../../utils/Session/index.js';



const Navigation = () => (
  <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={ROUTES.HOME}>Landing</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem>
          <SignOutButton />
      </NavItem>
    </Nav>
  </Navbar>
);

const NavigationNonAuth = () => (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={ROUTES.HOME}>Landing</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>
          <Link to={ROUTES.SIGN_IN}>Login</Link>
        </NavItem>
        <NavItem>
          <Link to={ROUTES.SIGN_UP}>Signup</Link>
        </NavItem>
      </Nav>
    </Navbar>
);


export default Navigation;
