import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./dashboard.scss";
import NavBar from "./../../components/navigation/Navigation.jsx";
import Sidebar from "./../../components/sidebar/Sidebar.jsx";
import { Grid, Row, Col } from 'react-bootstrap';
import  { FirebaseContext } from './../../components/Firebase';
import { withAuthorization } from './../../components/Session';


class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrapper">
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
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Dashboard);
