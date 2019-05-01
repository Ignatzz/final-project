import React from "react";
import "./gamebutton.css"
import * as utils from "../../pages/SamTest"

class GameButtonA extends React.Component {
  handleClick = () => {
    utils.playFrisbee();
  }

  render() {
    return (
      <button className="buttonA" onClick={this.handleClick}>
        Play Frisbee Golf
      </button>
    );
  }
}


class GameButtonB extends React.Component {
  handleClick = () => {
    utils.bikeRide();
  }



  render() {
    return (
      <button className="buttonB" onClick={this.handleClick}>
        Go for a bike ride
      </button>
    );
  }
}


class GameButtonC extends React.Component {
  handleClick = () => {
  utils.takeNap();
   console.log("clickkkk", this);
  }



  render() {
    return (
      <button className="buttonC" onClick={this.handleClick}>
       Take a Nap
      </button>
    );
  }
}





export {GameButtonA};
export {GameButtonB};
export {GameButtonC};
