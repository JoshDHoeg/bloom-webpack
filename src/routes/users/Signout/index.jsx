// Bloomtime 2018
import React from 'react';

//IMPORT UTILS
import { withFirebase } from './../../../utils/Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
