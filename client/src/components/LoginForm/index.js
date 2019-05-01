import React from "react"
import "./Login.css";

const LoginForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
    <div className="form-group" style={{width: "100%", height:"75px", marginRight: "0", marginLeft: "-.0em", marginTop: "-3px"}}>
      <input style={{ textAlign: "left", height: "50px", fontSize:"30px", marginBottom: "15px"}}
      name="email"
      type="email"
      className="form-control"
      placeholder="email"
      id="email"
      required
      />
    </div>

  <div className="form-group" style={{width: "100%", marginRight: "0", marginLeft: "-.0em"}}>
  <input style={{ textAlign: "left", height: "50px", fontSize:"30px", marginBottom: "20px"}}
  name="password"
  type="password"
  className="form-control"
  placeholder="password"
  id="password"
  required
  />
  </div>

  <div className="text-center">
    <button type="submit" className="btn btn-dark" style={{width: "70%", height: "65px", marginRight: "0", fontSize: "30px"}}>
      Login
    </button>
    </div>
</form>
    )
  }

export default LoginForm