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
    utils.openMenu();
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
    healthPercentage: 100
  }

  
  componentDidMount() {
    setTimeout(
      function() {
        console.log(utils.state.playerHealth);
        console.log(utils.state.playerStats[0].health);
        this.setState({currentPlayerHealth:utils.state.playerHealth,
          totalPlayerHealth:utils.state.playerStats[0].health,
          healthPercentage: (utils.state.playerHealth)/(utils.state.playerStats[0].health)*100+'%'
        })
       }
      .bind(this),
      5000
    ); 
  }
   
  refreshPlayerHealthBar = () => this.setState({ currentPlayerHealth: utils.state.playerStats[0].health, 
    healthPercentage: (utils.state.playerHealth)/(utils.state.playerStats[0].health)*100+'%'
  })

 
  render() {
    return (
      <div className= "healthBarDiv">
        <div className= "actualHealth"  style= {{width:this.state.healthPercentage}}>
        <p className= "healthNumbers">HP: {this.state.currentPlayerHealth}/{this.state.totalPlayerHealth} </p>
        </div>

      </div>
      
    );
  }
}

class PlayerAPBar extends React.Component {
  state = {
    currentPlayerAP: 0,
    totalPlayerAP: 10,
    APPercentage: 100

  };
  componentDidMount() {
    setTimeout(
      function() {
        console.log(utils.state.playerAP);
        console.log(utils.state.playerStats[0].ap);
        this.setState({currentPlayerAP:utils.state.playerAP,
          totalPlayerHealth:utils.state.playerStats[0].ap,
          APPercentage: (utils.state.playerAP)/(utils.state.playerStats[0].ap)*100+'%'
        })
       }
      .bind(this),
      5000
    ); 
  }
   
  refreshPlayerHealthBar = () => this.setState({ currentPlayerAP: utils.state.playerStats[0].playerAP, 
    APPercentage: (utils.state.playerAP)/(utils.state.playerStats[0].playerAP)*100+'%'
  })

render() {
  return (
     <div className= "APBarDiv">
        <div className= "actualAP"  style= {{width:this.state.APPercentage}}>
        <p className= "APNumbers">AP: {this.state.currentPlayerAP} / {this.state.totalPlayerAP}</p>
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