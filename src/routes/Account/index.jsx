// Bloomtime 2018
import React from 'react';

//IMPORT ROUTES
import { PasswordForgetForm } from './../users/PasswordForget/index.jsx';
import PasswordChangeForm from './../users/PasswordChange/index.jsx';


import { AuthUserContext, withAuthorization } from './../../utils/Session';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
