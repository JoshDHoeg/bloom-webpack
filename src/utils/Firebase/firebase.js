import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB2yzJhaQ1zy8bkIOVP6gbhNxBvV7Bhd7M",
  authDomain: "bloomdash-aca9f.firebaseapp.com",
  databaseURL: "https://bloomdash-aca9f.firebaseio.com",
  projectId: "bloomdash-aca9f",
  storageBucket: "bloomdash-aca9f.appspot.com",
  messagingSenderId: "327651474050",
};

export default class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  componentDidMount(){

  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
