// Bloomtime 2018
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import * as firebaseui from 'firebaseui';

//import components
import Navigation from "./components/Navigation/index.jsx";

//import routes
import Dashboard from "./routes/Dashboard/index.jsx";
import Login from "./routes/users/Signin/index.jsx";
import Signup from "./routes/users/Signup/index.jsx";
import Account from "./routes/Account/index.jsx";
import PasswordForgetPage from './routes/users/PasswordForget/index.jsx';

//import utils
import { withFirebase } from './utils/Firebase';
import { withAuthentication } from './utils/Session';
import * as ROUTES from './utils/constants/routes';

/*
This is the main app component, essentially all the code in the app comes here first.

We are using react-router which essentially takes the URL and decides which components
should be displayed based on the specific path. We are using a high level component above
the AuthRouter that listens for the users authentication code and allows us to access the
data at any point throughout the entire app.
*/
const AuthRouter = () => (
    <Router>
      <div>
        <Navigation />
        <Route exact path={ROUTES.HOME} component={Dashboard}/>
        <Route path={ROUTES.SIGN_IN} component={Login}/>
        <Route path={ROUTES.SIGN_UP} component={Signup}/>
        <Route path={ROUTES.ACCOUNT} component={Account}/>
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      </div>
    </Router>
);

export default withAuthentication(AuthRouter);
