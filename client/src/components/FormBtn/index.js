import React from "react";

const FormBtn = ({ onClick}) => {
  return (
    <div className="text-center">
    <button type="submit" className="btn btn-dark" onClick={onClick} style={{width: "70%", height: "65px", marginRight: "0", fontSize: "30px"}}>
      Login
    </button>
    </div>
  );
}

export default FormBtn;