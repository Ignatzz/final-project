import React from "react";
import "./gamebutton.css"

class GameButtonA extends React.Component {
  handleClick = () => {
   console.log("clickkkk", this)
  }

  

  render() {
    return (
      <button className="btn btn-dark buttonA" onClick={this.handleClick}>
        Play Frisbee Golf
      </button>
    );
  }
}


class GameButtonB extends React.Component {
  handleClick = () => {
   console.log("clickkkk", this)
  }

  

  render() {
    return (
      <button className="btn btn-dark buttonB" onClick={this.handleClick}>
        Go for a bike ride
      </button>
    );
  }
}


class GameButtonC extends React.Component {
  handleClick = () => {
   console.log("clickkkk", this)
  }

  

  render() {
    return (
      <button className="btn btn-dark buttonC" onClick={this.handleClick}>
       Take a Nap
      </button>
    );
  }
}





export {GameButtonA};
export {GameButtonB};
export {GameButtonC};