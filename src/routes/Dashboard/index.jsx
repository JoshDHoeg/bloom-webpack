import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";
import NavBar from "./../../components/Navigation/index.jsx";
import Sidebar from "./../../components/Sidebar/index.jsx";
import { Grid, Row, Col } from 'react-bootstrap';
import  { FirebaseContext } from './../../utils/Firebase';
import { withAuthorization } from './../../utils/Session';


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
