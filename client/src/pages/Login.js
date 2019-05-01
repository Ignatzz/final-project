import React, { Component } from "react";
import Container from "../components/Container";
import {Row, Col} from "../components/rollCol"
import Svg from "../components/Svg/Svg"
import LoginForm from "../components/LoginForm";
import FormBtn from "../components/FormBtn/"
import SignUpBtn from "../components/Btn";
import app from "../firebase/base"
import "./login.css";


class Login extends Component {
 handleLogin = async event => {
   event.preventDefault();
   const { email, password} = event.target.elements;
   try {
     const user = await  app
     .auth()
     .signInWithEmailAndPassword(email.value, password.value);
     this.props.history.push("/main")
   } catch (error) {
     alert(error)
   }
 };


  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   // const password = event.target.password;
  //   debugger
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // // Submittal for username and password
  // handleFormSubmit = event => {
  //   this.setState(() => ({
  //     login: true,
  //     signUp: true
  //   }))


  render() {
    return (
      <div className="loginDiv">
      <main>
        <Svg />
      <Container>
        <Row>
          <Col size="sm-12">
          <LoginForm onSubmit={this.handleLogin} />
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
          <SignUpBtn />
          </Col>
          </Row>
      </Container>
      </main>
      </div>
    );
  }
}

export default Login;
