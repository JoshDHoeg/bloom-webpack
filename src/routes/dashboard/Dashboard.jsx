import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./dashboard.scss";
import NavBar from "./../../components/navbar/Navbar.jsx";
import Sidebar from "./../../components/sidebar/Sidebar.jsx";
import { Grid, Row, Col } from 'react-bootstrap';
import  { FirebaseContext } from './../../components/Firebase';


export default class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4}>
              <Sidebar />
            </Col>
            <Col xs={12} md={8}>
              <FirebaseContext.Consumer>
                {firebase => {
                  return <div>I've access to Firebase and render something.</div>;
                }}
              </FirebaseContext.Consumer>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
