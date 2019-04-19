import React from "react";

export function NewGameBtn (props) {
  return (
    <div className="text-center">
    <button className="btn btn-dark" href="#" {...props} style={{width: "80%", height: "85px", marginRight: "0", fontSize: "30px", marginbottom: "40px"}}>
      New Game
    </button>
    </div>
  
  );
}

export function ContinueBtn (props) {
    return(
      <div className="text-center">
    <button className="btn btn-dark"  {...props} style={{width: "80%", height: "85px", marginRight: "0", fontSize: "30px", marginbottom: "40px"}}>
    Continue 
    </button>
    </div>
    )
}

export function AboutBtn (props) {
    return (
      <div className="text-center">
        <button className="btn btn-dark" {...props} style={{width: "80%", height: "85px", marginRight: "0", fontSize: "30px", marginbottom: "40px"}}>
        About
        </button>
        </div>
    )
}