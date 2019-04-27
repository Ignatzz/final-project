import React from "react";
import "./combatbuttons.css"

class RegAttackButton extends React.Component {
  handleClick = () => {
   console.log("clickkkk", this)
  }

  

  render() {
    return (
      <button className="btn btn-dark regAttackButton" onClick={this.handleClick}>
        Regular Attack
      </button>
    );
  }
}


class SpecAttackButton extends React.Component {
  handleClick = () => {
   console.log("clickkkk", this)
  }

  

  render() {
    return (
      <button className="btn btn-dark specAttackButton" onClick={this.handleClick}>
        Special Attack
      </button>
    );
  }
}


class UseItemButton extends React.Component {
  handleClick = () => {
   console.log("clickkkk", this)
  }

  

  render() {
    return (
      <button className="btn btn-dark useItemButton" onClick={this.handleClick}>
       Use an item
      </button>
    );
  }
}





export {RegAttackButton};
export {SpecAttackButton};
export {UseItemButton};