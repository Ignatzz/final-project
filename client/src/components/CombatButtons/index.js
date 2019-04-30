import React from "react";
import "./combatbuttons.css"

class RegAttackButton extends React.Component {
  handleClick = () => {
   console.log("clickkkk", this)
  }

  

  render() {
    return (
      <button className="regAttackButton" onClick={this.handleClick}>
        Regular 
        <br/>
        Attack
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
      <button className="specAttackButton" onClick={this.handleClick}>
        Special Attack 
        <br/>
        (uses 5 AP)
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
      <button className="useItemButton" onClick={this.handleClick}>
       Use an 
       <br/>
       item
      </button>
    );
  }
}

class PlayerHealthBar extends React.Component {
    state = {
      currentPlayerHealth: this.props.currentPlayerHealth,
      totalPlayerHealth: this.props.totalPlayerHealth,
      styling: "width:40%"

    };
     
 
  render() {
    return (
      <div className= "healthBarDiv">
        
        <div className= "actualHealth"  style={this.styling}>
        <p className= "healthNumbers">HP: {this.currentPlayerHealth} / </p>
        </div>

      </div>
      
    );
  }
}

class PlayerAPBar extends React.Component {
  state = {
    currentPlayerAP: this.props.currentPlayerAP,
    totalPlayerAP: this.props.currentPlayerAP

  };

render() {
  return (
    <div className= "APBarDiv">
      
      <div className= "actualAP">
      <p className= "APNumbers">AP: {this.currentPlayerAP} / </p>
      </div>

    </div>
    
  );
}
}




export {RegAttackButton};
export {SpecAttackButton};
export {UseItemButton};
export {PlayerHealthBar};
export {PlayerAPBar};