import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
import Navbar from "../navbar/Navbar.jsx";
import style from "./app.scss";
import Button from 'react-bootstrap/lib/Button';

export default class AppContainer extends Component {
  constructor() {
    super();

    this.state = {
      username: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { username } = this.state;
    return (
      <form id="article-form">
        <Navbar />
        <Button bsStyle="primary">Login</Button>
        <p className="app">Login to your account</p>
        <Input
          text="username"
          label="username"
          type="text"
          id="username"
          value={username}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

const wrapper = document.getElementById("app-wrapper-component");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;
