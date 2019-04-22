import React from "react";
import { Link } from "react-router-dom"

const FormBtn = props => {
  return (
    <div className="text-center">
    <button className="btn btn-dark" {...props} style={{width: "80%", height: "85px", marginRight: "0", fontSize: "30px", marginbottom: "40px"}}>
    <Link to="/main">
      Login
      </Link>
    </button>
    </div>
  );
}

export default FormBtn;