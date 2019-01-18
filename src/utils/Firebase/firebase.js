// Bloomtime 2018
import app from 'firebase/app';
import 'firebase/auth';

//these are the configurations for Firebase
// TODO: replace this config file with the config keys and develop new keys for prod and dev envs
const config = {
  apiKey: "AIzaSyB2yzJhaQ1zy8bkIOVP6gbhNxBvV7Bhd7M",
  authDomain: "bloomdash-aca9f.firebaseapp.com",
  databaseURL: "https://bloomdash-aca9f.firebaseio.com",
  projectId: "bloomdash-aca9f",
  storageBucket: "bloomdash-aca9f.appspot.com",
  messagingSenderId: "327651474050",
};

//React Function Component
export default class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // *** Auth API *** //

  //USER SIGN UP
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  //USER SIGN IN
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //USER SIGN OUT
  doSignOut = () => this.auth.signOut();

  //USER PASS RESET
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  //USER PASS UPDATE
  doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}
