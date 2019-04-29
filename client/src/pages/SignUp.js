import React, { Component } from "react";
import Container from "../components/Container";
import {Row, Col} from "../components/rollCol";
import SignupForm from "../components/SignUpForm";
import "./signup.css";
import {Howl, Howler} from 'howler';
import app from "../firebase/base"

const sound = new Howl({
    src: "../sounds/eyetiger.mp3",
    autoplay: true,
    volume: 0.5
        });

class SignUp extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password} = event.target.elements;
    try {
      const user = await app
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/main");
    } catch (error) {
      alert(error)
     }
    }; 


// handleInputChange = event => {
//   const value = event.target.value;
//   const name = event.target.name;
//   this.setState({
//     [name]: value
//   });
// };

// handleFormSubmit = event => {
//   this.setState(() => ({
//     signUp: true
//   }))
// }

render(){
  return (
    <div className="signupDiv">
    <main>
      <div className="signupContainer">
      <Container >
        <Row>
          <Col size="sm-12">
          <SignupForm onSubmit={this.handleSignUp} />
          </Col>
        </Row>
      </Container>
      </div>
      </main>
      </div>
  )
}

}




export default SignUp;