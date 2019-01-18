import React from 'react';

import { PasswordForgetForm } from './../users/PasswordForget/index.jsx';
import PasswordChangeForm from './../users/PasswordChange';

const AccountPage = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

export default AccountPage;
