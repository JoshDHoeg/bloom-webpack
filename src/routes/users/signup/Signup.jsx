import React from "react";
import ReactDOM from "react-dom";
import style from "./signup.scss";
import NavBar from "./../../../components/navbar/Navbar.jsx";

export default class Dashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <h1>This is the signup</h1>
      </div>
    );
  }
}
