import React, { Component } from "react";
import Container from "../components/Container";
import {Row, Col} from "../components/rollCol"
import Svg from "../components/Svg/Svg"
import "./signup.css"
import {NewGameBtn, ContinueBtn, AboutBtn} from "../components/MainMenu"

class Main extends Component {
  state = {
    newGame: "",
    contine: "",
    about: ""

  };

  render() {
    return (
      <div className="signupDiv">
      <Container>
        <Svg />
        <Row>
          <Col size="md-12">
          <NewGameBtn
          />
        </Col>
        </Row>
        <br />
        <Row>
          <Col size="md-12">
          <ContinueBtn
          />
          </Col>
        </Row>
        <br />
        <Row>
          <Col size="md-12">
          <AboutBtn
          />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Main;
