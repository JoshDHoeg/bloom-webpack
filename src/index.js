import React from 'react';
import ReactDOM from 'react-dom';
import AuthRouter from './AuthRouter.jsx';

import Firebase, { FirebaseContext } from './utils/Firebase';


ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
     <AuthRouter />
  </FirebaseContext.Provider>,
  document.getElementById('app-wrapper-component')
);
