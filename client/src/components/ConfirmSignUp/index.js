import React from "react";
import { Link } from "react-router-dom"

const ConfirmBtn = props => {
  return (
    <div className="text-center">
    <button className="btn btn-dark" href="/signUp" {...props} style={{width: "80%", height:"85px", fontSize: "30px", marginRight: "0"}}>
      <Link to="/main">
      Confirm
      </Link>
    </button>
    </div>
  );
}

export default ConfirmBtn;