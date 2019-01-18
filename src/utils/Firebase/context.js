// Bloomtime 2018
import React from 'react';

const FirebaseContext = React.createContext(null);

//React Function Component
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

//Always export at the bottom of the file.
export default FirebaseContext;
