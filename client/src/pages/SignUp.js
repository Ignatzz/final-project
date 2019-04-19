import React from "react";
import Container from "../components/Container";
import {Row, Col} from "../components/rollCol";
import {UsernameInput, PasswordInput, EmailInput} from "../components/SignUpForm"
import {ConfirmBtn} from "../components/ConfirmSignUp"

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    signUp: false
  }

handleInputChange = event => {
  const value = event.target.value;
  const name = event.target.name;
  this.setState({
    [name]: value
  });
};

handleFormSubmit = event => {
  this.setState(() => ({
    signUp: true
  }))
}

render(){
  return (
    <main>
      <Container>
        <Row>
          <Col size="sm-12">
          <UsernameInput
          value={this.state}
          onChange={this.state.handleInputChange}
          />
          </Col>
        </Row>
        <Row>
        <Col size="sm-12">
        <PasswordInput
        value={this.state}
        onChange={this.state.handleInputChange}
        />
        </Col>
        </Row>
        <Row>
          <Col size="sm-12">
          <EmailInput
          value={this.state}
          onChange={this.state.handleInputChange}
          />
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
          {/* <ConfirmBtn
          /> */}
          </Col>
          </Row>
        
      </Container>
      </main>
  )
}

}




export default SignUp;