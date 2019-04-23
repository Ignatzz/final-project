import React from "react";
import { Link } from "react-router-dom"

const SignUpBtn = props => {
  return (
    <div className="text-center">
    <button className="btn btn-dark" {...props} style={{width: "70%", height:"65px", fontSize: "30px", marginRight: "0"}}>
     <Link to="/signup">
      Signup
      </Link>
    </button>
    </div>
  );
}

export default SignUpBtn;