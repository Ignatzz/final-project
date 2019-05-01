import React from "react";
import "./combatbuttons.css"
import * as utils from "../../pages/SamTest"

function RegAttackButton () {
  function handleClick (){
    utils.regularAttack();
   
  }
  
  return (
    <button className="regAttackButton" onClick={handleClick}>
      Regular 
      <br/>
      Attack
    </button>
  );

  }

// class RegAttackButton extends React.Component {
//   handleClick = () => {
//     utils.regularAttack();
//   }

  

//   render() {
//     return (
//       <button className="regAttackButton" onClick={this.handleClick}>
//         Regular 
//         <br/>
//         Attack
//       </button>
//     );
//   }
// }


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

// function PlayerHealthBar () {
//   const [currentPlayerHealth, setCurrentPlayerHealth] = useState(10);
//   const [totalPlayerHealth, setTotalPlayerHealth] = useState(10);
//   const [healthPercentage, setHealthPercentage] = useState(33);

//   useEffect(() => {
//   setCurrentPlayerHealth(utils.state.playerHealth);
//   setTotalPlayerHealth(utils.state.playerStats[0].health);
//   setHealthPercentage((utils.state.playerHealth)/(utils.state.playerStats[0].health)*100+'%')
//   },[]);

//   return (
//     <div className= "healthBarDiv">
//       <div className= "actualHealth"  style= {{width:healthPercentage}}>
//       <p className= "healthNumbers">HP: {currentPlayerHealth}/{totalPlayerHealth} </p>
//       </div>

//     </div>
    
//   );

//   }



  class PlayerHealthBar extends React.Component {
    state = {
      currentPlayerHealth: utils.state.playerHealth,
      totalPlayerHealth: utils.state.playerStats[0].health,
      healthPercentage: (utils.state.playerHealth)/(utils.state.playerStats[0].health)*100+'%'
    };
    componentDidMount() {
      // Event listeners are only safe to add after mount,
      // So they won't leak if mount is interrupted or errors.
      setInterval(() => {
        this.setState({
          currentPlayerHealth: utils.state.playerHealth,
          totalPlayerHealth: utils.state.playerStats[0].health,
          healthPercentage: (utils.state.playerHealth)/(utils.state.playerStats[0].health)*100+'%'
          });
      }, 1000);
     
    }
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
    currentPlayerAP: utils.state.playerAP,
    totalPlayerAP: utils.state.playerStats[0].ap,
    APPercentage: (utils.state.playerAP/utils.state.playerStats[0].ap)*100+'%'

  };
  componentDidMount() {
      setInterval(() => {
        this.setState({
          currentPlayerAP: utils.state.playerAP,
          totalPlayerAP: utils.state.playerStats[0].ap,
          APPercentage: (utils.state.playerAP/utils.state.playerStats[0].ap)*100+'%'
          });
      }, 1000);
  }
   


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
export {PlayerAPBar}