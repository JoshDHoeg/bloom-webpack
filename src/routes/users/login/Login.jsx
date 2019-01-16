import React from "react";
import ReactDOM from "react-dom";
import style from "./login.scss";
import NavBar from "./../../../components/navbar/Navbar.jsx";

export default class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <h1>This is the Login</h1>
      </div>
    );
  }
}
