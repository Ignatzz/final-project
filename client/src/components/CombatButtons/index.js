import React from "react";
import "./combatbuttons.css"
import * as utils from "../../pages/SamTest"

class RegAttackButton extends React.Component {
  handleClick = () => {
    utils.regularAttack();
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
    utils.specialAttack();
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
    currentPlayerHealth: 0,
    totalPlayerHealth: 10,
    percentage: 100
  }

  
  componentDidMount() {
    setTimeout(
      function() {
        console.log("player health percentage: "+ (utils.state.playerStats[0].health)*100/12)
        console.log("playerstats:" + utils.state.playerStats[0].health);
        this.setState({currentPlayerHealth:utils.state.playerStats[0].health,
        percentage: ((utils.state.playerStats[0].health)*100/12)+'%'
        })
       }
      .bind(this),
      5000
    ); 
  }
   
  refreshPlayerHealthBar = () => this.setState({ currentPlayerHealth: utils.state.playerStats[0].health, 
    percentage: ((utils.state.playerStats[0].health)*100/12)
  })

 
  render() {
    return (
      <div className= "healthBarDiv">
        <div className= "actualHealth"  style= {{width:this.state.percentage}}>
        <p className= "healthNumbers">HP: {this.state.currentPlayerHealth} </p>
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