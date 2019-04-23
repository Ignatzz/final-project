import React from "react";
import Container from "../components/Container";
import {Row, Col} from "../components/rollCol"
import Svg from "../components/Svg/Svg"
import {UsernameInput, PasswordInput} from "../components/LoginForm";
import FormBtn from "../components/FormBtn/"
import SignUpBtn from "../components/Btn";


class Login extends React.Component {
  state = {
    username: "",
    password: "",
    login: false,
    signUp: false,
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    // const password = event.target.password;
    debugger
    this.setState({
      [name]: value,
    });
  };

  // Submittal for username and password
  handleFormSubmit = event => {
    this.setState(() => ({
      login: true,
      signUp: true
    }))


  };

  render() {
    return (
      <main>
        <Svg />
      <Container>
        <br />
        <Row>
          <Col size="sm-12">
          <UsernameInput
          value={this.state}
          onChange={this.state.handleInputChange}
          />
          <PasswordInput
          value={this.state}
          onChange={this.state.handleInputChange}
          />
          <FormBtn
          onClick={this.state.handleFormSubmit}
          />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
          <SignUpBtn
          />
          </Col>
        </Row>

      </Container>
      </main>
    );
  }
}

export default Login;
