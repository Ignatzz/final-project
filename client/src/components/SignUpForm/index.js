import React from "react"
import "./Login.css";

const UsernameInput = props => {
  return (
    <div className="form-group" style={{width: "100%", height:"75px", marginRight: "0", marginLeft: "-.0em"}}>
      <input style={{ textAlign: "left", height: "50px", fontSize:"30px", marginBottom: "15px"}}
      onChange={props.handleInputChange}
      value={props.username}
      name="username"
      type="text"
      className="form-control"
      placeholder="username"
      id="username"
      />
    </div>
  )
}

const PasswordInput = props => {
  return(
  <div className="form-group" style={{width: "100%", marginRight: "0", marginLeft: "-.0em"}}>
  <input style={{ textAlign: "left", height: "50px", fontSize:"30px", marginBottom: "30px"}}
  onChange={props.handleInputChange}
  value={props.password}
  name="password"
  type="password"
  className="form-control"
  placeholder="password"
  id="password"
  />
  </div>
  )
}

const EmailInput = props => {
  return(
  <div className="form-group" style={{width: "100%", marginRight: "0", marginLeft: "-.0em"}}>
  <input style={{ textAlign: "left", height: "60px", fontSize:"30px", marginBottom: "30px"}}
  onChange={props.handleInputChange}
  value={props.password}
  name="email"
  type="email"
  className="form-control"
  placeholder="email"
  id="email"
  />
  </div>
  )
  }

export {UsernameInput}
export {PasswordInput}
export {EmailInput}

