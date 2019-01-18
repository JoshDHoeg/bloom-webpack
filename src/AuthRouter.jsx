// Bloomtime 2018
import React from 'react';

//import components
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import Dashboard from "./routes/dashboard/Dashboard.jsx";
import Login from "./routes/users/login/Login.jsx";
import Signup from "./routes/users/signup/Signup.jsx";
import Account from "./routes/Account/index.jsx";
import PasswordForgetPage from './routes/users/PasswordForget/index.jsx';
import Navigation from "./components/navigation/Navigation.jsx";
import * as firebaseui from 'firebaseui';
import { withFirebase } from './utils/Firebase';
import * as ROUTES from './utils/constants/routes';
import { withAuthentication } from './utils/Session';

//import other
// import Axios from 'axios';
// import {Cookies} from 'react-cookie';
// import Parse from 'url-parse';

const AuthRouter = () => (
    <Router>
      <div>
        <Navigation />
        <Route exact path={ROUTES.HOME} component={Dashboard}/>
        <Route path={ROUTES.LOG_IN} component={Login}/>
        <Route path={ROUTES.SIGN_UP} component={Signup}/>
        <Route path={ROUTES.ACCOUNT} component={Account}/>
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      </div>
    </Router>
);

export default withAuthentication(AuthRouter);
