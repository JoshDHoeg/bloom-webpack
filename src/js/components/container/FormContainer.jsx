import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
import style from "./app.scss";

class FormContainer extends Component {
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

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;
