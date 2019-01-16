// Bloomtime 2018
import React from "react";

//import components
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import Dashboard from "./routes/dashboard/Dashboard.jsx";
import Login from "./routes/users/login/Login.jsx";
import Signup from "./routes/users/signup/Signup.jsx";
import * as firebaseui from 'firebaseui'

//import other
// import Axios from 'axios';
// import {Cookies} from 'react-cookie';
// import Parse from 'url-parse';

export default class AuthRouter extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };

  }


  render (){
    return(
      <Router>
        <div>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
        </div>
      </Router>
    )
  }
}
