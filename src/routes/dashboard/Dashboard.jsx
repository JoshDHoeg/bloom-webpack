import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./dashboard.scss";
import NavBar from "./../../components/navbar/Navbar.jsx";
import Sidebar from "./../../components/sidebar/Sidebar.jsx";
import { Grid, Row, Col } from 'react-bootstrap';

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
              <h1>This is the dashboard</h1>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
