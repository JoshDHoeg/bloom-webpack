// Bloomtime 2018
import React from 'react';

//import components
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import Dashboard from "./routes/dashboard/Dashboard.jsx";
import Login from "./routes/users/login/Login.jsx";
import Signup from "./routes/users/signup/Signup.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import * as firebaseui from 'firebaseui';
import { withFirebase } from './components/Firebase';
import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';

//import other
// import Axios from 'axios';
// import {Cookies} from 'react-cookie';
// import Parse from 'url-parse';

const AuthRouter = () => (
  <AuthUserContext.Provider value={this.state.authUser}>
    <Router>
      <div>
        <Navigation />
        <Route exact path='/' component={Dashboard}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
      </div>
    </Router>
  </AuthUserContext.Provider>
);

export default withAuthentication(AuthRouter);
