import React, { Component } from "react";
import Container from "../components/Container";
import {Row, Col} from "../components/rollCol"
import Svg from "../components/Svg/Svg"
import "./signup.css"
import {NewGameBtn, ContinueBtn} from "../components/MainMenu"
import {Howl, Howler} from 'howler';
import tiger from "../sounds/eyetiger.mp3"

class Main extends Component {
  state = {
    newGame: "",
    contine: "",
    about: ""

  };
  SoundPlay = event => {
    const Sound = new Howl({
      src: tiger,
      autoplay: true,
      volume: 0.5,
      loop: true
          });
  }
  componentDidMount(){
    this.SoundPlay();
  }

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
      </Container>
      </div>
    );
  }
}

export default Main;
